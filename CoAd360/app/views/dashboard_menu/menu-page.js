var vmModule = require("../../view-models/menu-view-model");

function menuLoaded(args) {
    var page = args.object;
    page.bindingContext = vmModule.menuViewModel;
}
exports.menuLoaded = menuLoaded;