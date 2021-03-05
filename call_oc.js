
console.log("load...");

// var NSAutoreleasePool = ObjC.classes.NSAutoreleasePool;
// var NSString = ObjC.classes.NSString;

// var pool = NSAutoreleasePool.alloc().init();
// try {
//   var text = ObjC.classes.NSString.stringWithString_("Hello World 22");
//   var NSLog = new NativeFunction(Module.findExportByName('Foundation', 'NSLog'), 'void', ['pointer', '...']);
// //   NSLog(NSString.stringWithString_('Hello World'));
//   NSLog(NSString.stringWithString_(text));
// } finally {
//   pool.release();
// }

function call_function_with_block() {
    const ViewController = ObjC.classes.ViewController;

    const block = new ObjC.Block({
        retType: 'void',
        argTypes: [ 'pointer' ],
        implementation: function(p) {
            // var NSString = ObjC.classes.NSString;
            var obj = new ObjC.Object(p);
            console.log(obj);
        }
    });
   
    var text = ObjC.classes.NSString.stringWithString_("Hello World 22");
    ViewController.callDispatch_input_(block, text);
}
