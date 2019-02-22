// Create SVG with a given size
let svg2 = dimple.newSvg('#ChartContainer', 600, 400);

// Function will be called when data file titanic1.csv is done loading
d3.csv('./public/titanic1.csv', function(data) {
    // getting a Chart instance to draw on
    let ChartInstance = new dimple.chart(svg2, data);

    // set the x axis to show passenger class (class 1, class 2, class 3)
    let x = ChartInstance.addCategoryAxis('x', 'Passenger Class')

    // set y axis to the number of people who died or survived in the incident
    let y = ChartInstance.addPctAxis('y', 'Count');

    // plotting the chart with status or survived/died as series.
    let s = ChartInstance.addSeries('Status', dimple.plot.bar);

    // This adds and position the legend to the right
    ChartInstance.addLegend(60,10,510,20, 'right');

    // This method allows us to draw the chart, 
    // within specified time. If left empty, there won't be animation
    ChartInstance.draw(1500);
})