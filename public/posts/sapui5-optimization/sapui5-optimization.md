## SAPUI5 performance optimization
<img src="/images/sapui5-optimization/sapui5-optimization-card.jpg" alt="Performance Optimization" class="md-image"/>

### Introduction & basis
In one of our client projects we faced issues with performance of our Fiori application. We identified that the main reason for these performance issues were in the UI side.
In this document we will share the problems we faced and the solutions we implemented to optimize the performance in the UI side.

### Application workflow
The application was made for scheduling & resourcing purposes. The main screen of the application contains a table of all work orders and operations. In addition, there is a Gantt chart which shows the schedule of the work orders and operations. The main screen also contains a filter bar which allows users to filter the work orders and operations by different criteria.

All of the work order & operation data is fetched at the beginning from backend and stored to model on the client side. The main screen is then rendered based on this data.

The user can perform different actions, such as drag and drop operations to changes their scheduled time, change duration of operations & add relations between operations and work orders. All of these actions update the model on the client side. The data is processed on the client side and only sent to the backend when the user clicks on the "Save" button.

### Performance issues - "The application feels slow"
The main problem we faced was that the application was very slow when there were a lot of work orders and operations at screen on the same time. The main reason for this was that the application was rendering all the work orders and operations at once, which caused a lot of DOM elements to be created and rendered, which in turn caused the application to become slow.

In addition to this, the structure of our client side model was not optimal. The model design was done at the start of the project ~2 years ago and was not changed much during the development. This caused us to have a lot of redundant data in the model, which bloated the model and made it slower to access the data.

Client reported these problems at later stages of the project, which made it difficult to optimize the application beforehand. We had to do a lot of refactoring and optimization to improve the performance of the application in the end.

### Measuring performance
To measure the performance of our application, we used the Chrome DevTools Performance tab. We recorded the performance of the application before and after the optimizations to see the difference. For the measurements we used the same set of data and performed the same actions in both the fixed and non-fixed versions of the application to have a fair comparison.

SAPUI5 offers a [guide](https://help.sap.com/docs/ABAP_PLATFORM_NEW/468a97775123488ab3345a0c48cadd8f/408b40efed3c416681e1bd8cdd8910d4.html) on how to increase the performance of SAPUI5 application for basic scenarios, but in our case we had to do a lot of custom optimizations to achieve the performance we wanted.

#### Recording performance
1. Open the application in Chrome and go to the Performance tab in DevTools.
<img src="/images/sapui5-optimization/performance-1.png" alt="performance-1" class="md-image" />
2. Click on the "Record" button then perform actions that we wanted to measure.
<img src="/images/sapui5-optimization/performance-2.png" alt="performance-2" class="md-image" />
3. After performing the actions, click on "Stop" button to stop the recording.
<img src="/images/sapui5-optimization/performance-3.png" alt="performance-3" class="md-image" />
4. Analyze the recorded performance data.

We also used network tab to measure the time for the backend calls and the time for the data to be loaded into the model. This helped us to identify if there were any issues with the backend calls or if the problem was solely on the client side. In our case backend calls were not the issue.

### Main causes of performance issues & solution
1. Having a big and complex model, using `structuredClone` to create copies of model data is very slow and causes performance issues. In some cases single lines of code which use `structuredClone` were taking up to seconds to execute. Avoid using `structuredClone` if possible. Only copy the data that is needed, and try to avoid copying large objects or arrays. Use skeleton functions to create new objects with only the necessary properties instead of copying the entire object.
```javascript
function example() {
    // Items property is big and complex
    var oModel = this.getModel('ModelName').getProperty('/Items'); 

    // DON'T DO THIS
    // This is very slow and causes performance issues
    var oModelCopy = structuredClone(oModel);
    doSomethingWithModelCopy(oModelCopy);

    // DO THIS
    // This is much faster and does not cause performance issues
    var oModelCopy = createSkeleton(oModel);
    doSomethingWithModelCopy(oModelCopy);
}

function createSkeleton(oModel) {
    return {
        property1: oModel.property1,
        property2: oModel.property2,
        // Only copy the necessary properties
    };
}
```
2. Using loops inside loops can cause a lot of iterations and can significantly slow down the performance of the application especially if the data set is large. Try to avoid using nested loops if possible, and if you need to use them, try to optimize them by reducing the number of iterations or by using more efficient algorithms. If you can use objects or maps to store data instead of arrays as it can reduce the time complexity of the loops.
```javascript
function example() {
    // oItems is array of objects
    var oItems = this.getModel('ModelName').getProperty('/Items');
    // DON'T DO THIS
    oItems.forEach(function(oItem) {
        item.someNestedProperty.forEach(function(innerItem) {
            if (innerItem.someProperty === someValue) {
                // Do something
                doSomethingWithItems(oItem, innerItem);
            }
        });
    });

    // DO THIS
    var oItemsMap = createItemsMap(oItems); // Create a map
    oItems.forEach(function(item) {
        var innerItems = oItemsMap[item.id];
        doSomethingWithItems(item, innerItems);
    });
}
```
3. Using `this.getModel('ModelName')` inside loops. Every time the loop is executed and the `getModel` method is called. This can be very slow if there are a lot of iterations. Instead, store the reference to the model data and if possible the property data in a variable before the loop and use that variable inside the loop. This way, you are not calling the `getModel` method multiple times, which can significantly improve the performance of the loop.
```javascript
function example() {
    // DON'T DO THIS
    aData.forEach(function(oItem) {
        var sFoo = this.getModel('ModelName').getProperty('/foo');
        this.getModel('ModelName').doSomeFunction(foo);
    });

    // DO THIS
    // Store model reference in a variable before the loop
    var oModel = this.getModel('ModelName');
    aData.forEach(function(oItem) {
        var sFoo = oModel.getProperty('/foo');
        oModel.doSomeFunction(foo);
    });
}
```
4. Using `JSONModel` method `updateBindings(true)` to force update all bindings on the model. Many times this function did not need to be even called. We found out that this function runs really slow when the model has many bindings to update. Removing this function we managed to shave off `600ms` to `1200ms` constantly in multiple functions. Avoid using this function when the model is large if possible.
```javascript
function example() {
    var oModel = this.getModel('ModelName');
    // DON'T DO THIS IF NOT NECESSARY
    // This is very slow when the model has many bindings to update
    oModel.updateBindings(true);
}
```
5. Unnecessarily complex model structure. Our model structure had a lot of duplicate and redundant data, which made it slower to access the data. Also when looping the data, it makes a huge difference if the data has nested structures. Check if the model structure can be simplified and optimized for better performance. Avoid having nested structures if possible when working with big sets of data.
Compare
```json
[{
    "TreeId": "12345",
    "property1": "value1",
    "property2": "value2",
    "Items": [{ // Items represent operations
        "TreeId": "12345_0010",
        "property1": "value1",
        "property2": "value2",
        "Items"": []
    }],
    "Weekends": [],
    "Workshifts": [],
    "ScheduleDetails": []
}, {
    "TreeId": "12345_0010", // Operations are duplicated
    "property1": "value1",
    "property2": "value2",
    "Items": [],
    "Weekends": [],
    "Workshifts": [],
    "ScheduleDetails": []
}]
```
To this:
```json
[{
    "TreeId": "12345",
    "property1": "value1",
    "property2": "value2",
    "Items": [{
        "TreeId": "12345_0010",
        "property1": "value1",
        "property2": "value2",
        "Items"": []
    }],
    "Weekends": [],
    "Workshifts": [],
    "ScheduleDetails": []
}, {
    "TreeId": "67890", // Operations are not duplicated
    "property1": "value1",
    "property2": "value2",
    "Items": [{
        "TreeId": "67890",
        "property1": "value1",
        "property2": "value2",
        "Items"": []
    }],
    "Weekends": [],
    "Workshifts": [],
    "ScheduleDetails": []
}]
```

### When to consider optimization
You cannot optimize the performance of an application without knowing where the bottlenecks are beforehand. In our case, we identified the performance issues at later stages of the project as the customer started to test the application more rigorously. Some things can be identified during the development phase, such as complex model structure, but most of the performance issues can only be identified when they are tested by the customer with large sets of data in production environment.

### Conclusion
By doing the steps we described in the **Main Causes** part, we were able to significantly improve the performance of the application. Some milestones we achieved were:
- Reduce the time it takes to add relation between operations & work orders from `+300s` to `~2.8s`

<img src="/images/sapui5-optimization/dev-adding-relation.png" alt="dev-adding-relation" class="md-image" />

<img src="/images/sapui5-optimization/local-adding-relation.png" alt="local-adding-relation" class="md-image" />

- Reduce the time it takes to do the drag and drop action from `~10s` to `~2.5s`

<img src="/images/sapui5-optimization/dev-drag-and-drop.png" alt="dev-drag-and-drop" class="md-image" />

<img src="/images/sapui5-optimization/local-drag-and-drop.png" alt="local-drag-and-drop" class="md-image" />

- Reduce the time it takes to resize (change the duration of an operation) from `20s` to `3s`.

- Reduce the time it takes to add available template change from `+400s` to `~2.7s`.

<img src="/images/sapui5-optimization/dev-availability-template-change.png" alt="dev-availability-template-change" class="md-image" />
<img src="/images/sapui5-optimization/local-availability-template-change.png" alt="local-availability-template-change" class="md-image" />

- Reduce the time it takes to change date times for orders and operations from `~20s` to `~3s`

Overall, we learned what were the pain points of our application regarding performance. In summary, we can say that the main causes of performance issues were:
- Using `structuredClone` to create copies of model data.
- Using loops inside loops.
- Using `this.getModel('ModelName').getProperty('/path')` inside loops.
- Using `JSONModel` method `updateBindings(true)` to force update all bindings on the model.
- Unnecessarily complex model structure.

After fixing these issues, we were able to significantly improve the performance of the application and make it more responsive for the users. We also got some good feedback from the users regarding the performance of the application after the optimizations.

