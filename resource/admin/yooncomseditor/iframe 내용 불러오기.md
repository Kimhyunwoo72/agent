# iframe 내용 불러오기 적용 가이드

- iframeTEST.html(부모) , webEditor.html(자식) 스크립트 확인
  ```
   - webEditor.html
   - 자식페이지 dom이 완성되면 부모에게 메세지를 보내고
   window.parent.postMessage({call_fn_name:"fn_editorLoad2"},'*');
  ```
  ```
   - iframeTEST.html
   - 부모는 자식이보낸 메세지를 받아 확인하고 에디터에들어갈 내용을 return 
   window.addEventListener('message', function(e) {
  	console.log(e)
  	var messageObj = {};
  	if(e.data && e.data.call_fn_name == 'fn_editorLoad2') {
  	   cn = fn_editorLoad2();  // 내용 가져오기
  	   messageObj.cn = cn;
  	   sendMsgCIfram(messageObj); // 자식에게 메시지 보내기
  	}
   });
  function sendMsgCIfram(messageObj) {
  		var cIframe = document.getElementById('editor').contentWindow;
  		cIframe.postMessage(messageObj, '*');
  }
  function editorObject(){
  	var $editorFrame = null; //변수 생성
  	$editorFrame = $('#editor'); //아이프레임 호출
  	window.yooncomsEditor = $editorFrame[0].contentWindow.window.yooncomsEditor; 
  	//아이프레임 안에 생성한 웹에디터 호출
  }
   
  ```
  ```
   - webEditor.html
   - 자식페이지에서 부모페이지에서 보낸 내용을 받아 에디터 구성
     window.addEventListener('message', function(e) {
  	   console.log(e)
  	   if(e.data) {
  		   txt_kr = e.data.cn ? e.data.cn : "";
  		   yooncomsEditorLoad('cn',txt_kr,'kr');//에디터 구성
  		   parent.f_yooncomsEditorLoad(); 
  	   }
     });
  ```

  ```
   - iframeTEST.html
   function f_yooncomsEditorLoad() {
  	var $editorFrame = null; //변수 생성
  	$editorFrame = $('#editor'); //아이프레임 호출
  	window.yooncomsEditor = $editorFrame[0].contentWindow.window.yooncomsEditor;  //아이프레임 안에 생성한 웹에디터 호출
   }
   
  ```