const observableModule = require("data/observable");

function HomeItemsViewModel() {
    const viewModel = observableModule.fromObject({
        items: [
            {
                name: "Item 1",
                id: 1,
                description: "Upper Body",
                date: "4/21/2018",
                sessionLength: "58:17",
                log: [
                    {bodypart:"Chest",exercise1:"bench press", exercise2: "flys"},
                    {bodypart:"Shoulders",exercise1:"band press", exercise2: "extensions"},
                    {bodypart:"Back",exercise1:"bentover rows", exercise2: "shrugs"},
                    {bodypart:"Bis",exercise1:"curls", exercise2: "hammer curls"},
                    {bodypart:"Tris",exercise1:"pulldown", exercise2: "extensions"}
                ]

            },
            {
                name: "Item 2",
                id: 2,
                description: "Lower Body",
                date: "4/19/2018",
                sessionLength: "58:17",
                log: [
                    {bodypart:"Quads",exercise1:"squat", exercise2: "lunges"},
                    {bodypart:"Hamstrings",exercise1:"leg curls", exercise2: "stiff let deadlift"},
                    {bodypart:"Calves",exercise1:"calf raises", exercise2: "single leg calf raises"},
                    {bodypart:"Abs",exercise1:"band ab curl", exercise2: "bicycles"}
                ]
            }
        ]
    });

    return viewModel;
}

module.exports = HomeItemsViewModel;
