# WizardJS

#Example

````javscript
var wizard = new Wizard(".wizard");
wizard.nextButton = ".wizard-next";
wizard.submitButton = ".wizard-submit";

wizard.addPage(".wizard-page-1");
wizard.addPage(".wizard-page-2");
wizard.addPage(".wizard-page-3");

wizard.run();

````