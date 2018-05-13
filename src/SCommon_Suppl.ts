
namespace EFTut_Suppl {
    
    export class $Common {

        // This is a special signature to avoid typescript error "because <type> has no index signature."
        // on this[<element name>]
        // 
        [key: string]: any;
    
        // Place any common code here 

        public $var1:string = "test1";
        public $var2:string = "test2";
        public $var3:string = "test3";
        public $var4:string = "";





        // Place empty defaults here - these just avoid unnecessary exceptions for missing methods.

        public $oncreate() { /* Empty */  }
        
        public $onenter() { /* Empty */  }
        
        public $onexit() { /* Empty */  }

        public $preenter() { /* Empty */  }
        
        public $preexit() { /* Empty */  }

        public $demoinit() { /* Empty */  }

        public $logging() { /* Empty */  }

        public $rewind() { /* Empty */  }
    }   
}