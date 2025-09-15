const report = require("multiple-cucumber-html-reporter");

report.generate({
    jsonDir: "test-results",
    reportPath: "test-results/reports/",
    reportName: "Cucumber Playwright Test Report",
    pageTitle: "Demo Blaze Test Report",
    displayDuration: false,
    metadata: {
        browser: {
            name: "chrome",
            version: "112",
        },
        device: "Raghu",
        platform: {
            name: "Windows",
            version: "101",
        },
    },
    customData: {
        title: "Test Details",
        data: [
            { label: "Project", value: "Demo Blaze Application" },
            { label: "Release", value: "V1.0" },
            { label: "Cycle", value: "Regression" }
        ],
    },
});