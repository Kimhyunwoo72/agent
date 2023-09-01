
function yooncomsEditorLoad(id,con,lang){		
	 window.yooncomsEditor = 
		 	new YooncomsEditor(			       
			 	id,			     
		        {licPathURL: '/resources/admin/yooncomseditor/yooncomseditor/lic/kukudocs.lic',
				 minHeight: 0, //에디터 최소 높이설정
		         maxHeight: 0,
		         info: {
		        	    companyName : '윤커뮤니케이션즈',
		        	    homepage : 'https://www.yooncoms.com',
		        	    logoImg : 'https://www.yooncoms.com/humanframe/theme/yooncoms/assets/image/common/logo_yoon.png'
		        	},
		         templateList : [{
			        	 name : '부서양식',
			        	 items : [{ name : '회의록', type : 'url', value : '/resources/admin/yooncomseditor/template/meeting_log.html' }]
			        	 },{
			        	 name : '레포트',
			        	 items : [{ name : '업무보고서', type : 'url', value : '/resources/admin/yooncomseditor/template/report.html'}
			        	 		 ,{ name : '휴가신청서', type : 'url', value : '/resources/admin/yooncomseditor/template/vacation.html'}]
			            }],
		         publicPathURL : '/resources/admin/yooncomseditor',	//기본경로		           
		         width: '100%',//Editor 가로크기
		         height: '900px',//Editor 세로크기
		         hiddenMenu: ['fileGroup', 'helpGroup', 'templateList'], //Hidden Menu 설정
		         useMenuBar: false,				        
		         cell_lock_name: 'free', //Kaoni Cell Lock Attibute 설정 (Lock 기능 체크하기 위해서는 반드시 Attibute Name 설정)			         
		         fontSize: [ {name: "8pt", value: "8pt"}, {name: "9pt", value: "9pt"}
		         			,{name: "10pt", value: "10pt"}, {name: "11pt", value: "11pt"}
		         			,{name: "12pt", value: "12pt"}, {name: "13pt", value: "13pt"}
		         			,{name: "14pt", value: "14pt"}, {name: "15pt", value: "15pt"}
		         			,{name: "16pt", value: "16pt"}, {name: "17pt", value: "17pt"}
		         			,{name: "18pt", value: "18pt"}, {name: "19pt", value: "19pt"}
		         			,{name: "20pt", value: "20pt"}, {name: "21pt", value: "21pt"}
		         		   ], //사용할 Font Size 설정
		         fontFamily: [{name: "맑은 고딕", value: "맑은 고딕"}, {name: "굴림", value: "굴림"}, {name: "돋움", value: "돋움"}], //사용할 Font Family 설정			        
		         defaultFontSize: '11pt', //기본 Font Size			        
		         defaultFontFamily: '맑은 고딕',  //기본 Font Family 설정			         			         
		         languagePathURL: '/resources/admin/yooncomseditor/lang/',//Language Resource 위치 URL			         
		         defaultLanguage: lang,//사용할 Language 설정			         
//		         customButtonMenuItem: [
//		             {
//		                 id: "customButton1",
//		                 name: "customButton1",
//		                 style: "background:url('/resources/admin/yooncomseditor/images/drag_table.png'); background-size:20px 18px;", //Custom Button Menu 아이템 설정
//		                 action: function () {
//		                     alert('Custom Menu1 !!');
//		                 }
//		             },
//		             {
//		                 id: "customButton2",
//		                 name: "customButton2",
//		                 style: "background:url('/resources/admin/yooncomseditor/images/drag_table.png'); background-size:20px 18px;",
//		                 action: function () {
//		                     alert('Custom Menu2 !!');
//		                 }
//		             }
//		         ],			         
		         customMagicLineStyle: 'background-color:#0000ff;',//표 위아래 문단 추가 버튼의 스타일 지정			        
		         defaultTableWidth: 400, //표 생성시 기본 가로 사이즈 지정
		        
		         /*///////////////// New Options ///////////////// */			       
		         tableSelectImageURL : '/resources/admin/yooncomseditor/images/cross_arrow.png',  //표 전체 선택을 위한 이미지 URL 지정 (변경 지양)			         
		         tableMoveHandlerImageURL : '/resources/admin/yooncomseditor/images/movehandler.png',//표 이동시 사용할 이미지 URL 지정 (변경 지양)			         
		         tableMoveImageURL : '/resources/admin/yooncomseditor/images/drag_table.png', //표 드래그시 사용할 이미지 URL 지정 (변경 지양)			        
		         defaultEditorStylePath : '/resources/admin/yooncomseditor/stylesheets/editor_style.css', //Editor 내부에서 사용할 Style 지정 CSS 파일 (지양)

		         //xhtml1.1 Doc Type 지정 예  (default null [Doctype 없음] )
		         defaultDocType : null, //{docType : 'xhtml1.1', publicId : '-//W3C//DTD XHTML 1.1//EN', systemId : 'http://www.w3c.org/TR/xhtml11/DTD/xhtml11.dtd'},
		         defaultCharset : 'utf-8', //Default Character Set 지정 예 (default utf-8)			        
		         useSecurityScript : true, //Script Tag 제거 (script, vbscript) (default true)
		         useSecurityEvent : true,//DOM의 on-Event 제거 (false시 on-event들을 전체를 제거안함)
		         notRemoveEventTypes : [], // ['onclick','mousedown' .... n]; //제거하지 않을 Event의 Type들 지정 예 [ Array로 입력되는 on-Event는 제거되지 않습니다 ]
				 tabSpaceSize : 4,//Tab Size 지정 (Default 4)			         
		         usePasteFilterForChrome : true,//Chrome Filter Paste Options (default true)			        
		         usePasteConfirmForChrome : true, //HTML & Image Confirm Option (default true)			        
		         useFirstFocus : false, //Editor Load시 Focus 주입 여부 적용 (default true)			         
		         useLockMenu : false,//Toolbar에 Table/Cell Lock 기능 사용 설정			         
		         lockImageURL : '/resources/admin/yooncomseditor/images/lock.png', //Table / Cell Lock Image URL 설정			    
		         toolGroup : 'cn',
		         colorPicker : { //Color Picker 값 수정
		             simpleColor :   ["ffffff", "000000", "eeece1", "1f497d", "4f81bd", "c0504d", "9bbb59", "8064a2", "4bacc6", "f79646"],
		             standardColor : ["f2f2f2", "808080", "ddd9c3", "c6d9f1", "dce6f2", "f2dcdb", "ebf1de", "e6e0ec", "dbeee0", "fdeada",
		                 "d9d9d9", "595959", "c4bd97", "8eb4e3", "b9cde5", "e6b9b8", "d7e4bd", "ccc1da", "b7dee8", "fcd5b5",
		                 "bfbfbf", "404040", "948a54", "558ed5", "95b3d7", "d99694", "c3d69b", "b3a2c7", "93cddd", "fac090",
		                 "a6a6a6", "262626", "4a452a", "17375e", "376092", "953735", "77933c", "604a7b", "31859c", "e46c0a",
		                 "808080", "0d0d0d", "1e1c11", "10243f", "254061", "632523", "4f6228", "403152", "215968", "984807"],
		             normalColor   : ["c00000", "ff0000", "ffc000", "ffff00", "92d050", "00b050", "00b0f0", "0000ff", "002060", "7030a0"]
		         }, 
		         useAdjustForChrome : true,			         
		         useNoneBorderVisualize : true, //Default : false //Cell None Border Visualize			         
		         lineHeight : [{name: "0.5", value: "0.5"}, {name: "1.5", value: "1.5"}],//사용할 Line Height 설정			         
		         usePasteRemoveFontFamily : true, // Paste시 Content의 Font-family 제거 
		         useHtmlModeTextIndent : true,  // HTML Mode에서 Text만 별도로 Indent 처리 할지 여부 설정
		         fileUploadURL : '/admin/cm/yoonEdFileUpload.do',
		         imageUploadURL : '/admin/cm/yoonEdFileUpload.do',
		         initHTML : con
		        }
		 	);
}


function yooncomsEditorLoad2(id,con,lang){		
	 window.yooncomsEditor2 = 
		 	new YooncomsEditor(			       
			 	id,			     
		        {licPathURL: '/resources/admin/yooncomseditor/yooncomseditor/lic/kukudocs.lic',
				 minHeight: 0, //에디터 최소 높이설정
		         maxHeight: 0,
		         info: {
		        	    companyName : '윤커뮤니케이션즈',
		        	    homepage : 'https://www.yooncoms.com',
		        	    logoImg : 'https://www.yooncoms.com/humanframe/theme/yooncoms/assets/image/common/logo_yoon.png'
		        	},
		         templateList : [{
			        	 name : '부서양식',
			        	 items : [{ name : '회의록', type : 'url', value : '/resources/admin/yooncomseditor/template/meeting_log.html' }]
			        	 },{
			        	 name : '레포트',
			        	 items : [{ name : '업무보고서', type : 'url', value : '/resources/admin/yooncomseditor/template/report.html'}
			        	 		 ,{ name : '휴가신청서', type : 'url', value : '/resources/admin/yooncomseditor/template/vacation.html'}]
			            }],
		         publicPathURL : '/resources/admin/yooncomseditor',	//기본경로		           
		         width: '100%',//Editor 가로크기
		         height: '900px',//Editor 세로크기
		         hiddenMenu: ['fileGroup', 'helpGroup', 'templateList'], //Hidden Menu 설정
		         useMenuBar: false,				        
		         cell_lock_name: 'free', //Kaoni Cell Lock Attibute 설정 (Lock 기능 체크하기 위해서는 반드시 Attibute Name 설정)			         
		         fontSize: [ {name: "8pt", value: "8pt"}, {name: "9pt", value: "9pt"}
		         			,{name: "10pt", value: "10pt"}, {name: "11pt", value: "11pt"}
		         			,{name: "12pt", value: "12pt"}, {name: "13pt", value: "13pt"}
		         			,{name: "14pt", value: "14pt"}, {name: "15pt", value: "15pt"}
		         			,{name: "16pt", value: "16pt"}, {name: "17pt", value: "17pt"}
		         			,{name: "18pt", value: "18pt"}, {name: "19pt", value: "19pt"}
		         			,{name: "20pt", value: "20pt"}, {name: "21pt", value: "21pt"}
		         		   ], //사용할 Font Size 설정
		         fontFamily: [{name: "맑은 고딕", value: "맑은 고딕"}, {name: "굴림", value: "굴림"}, {name: "돋움", value: "돋움"}], //사용할 Font Family 설정			        
		         defaultFontSize: '11pt', //기본 Font Size			        
		         defaultFontFamily: '맑은 고딕',  //기본 Font Family 설정			         			         
		         languagePathURL: '/resources/admin/yooncomseditor/lang/',//Language Resource 위치 URL			         
		         defaultLanguage: lang,//사용할 Language 설정			         
//		         customButtonMenuItem: [
//		             {
//		                 id: "customButton1",
//		                 name: "customButton1",
//		                 style: "background:url('/resources/admin/yooncomseditor/images/drag_table.png'); background-size:20px 18px;", //Custom Button Menu 아이템 설정
//		                 action: function () {
//		                     alert('Custom Menu1 !!');
//		                 }
//		             },
//		             {
//		                 id: "customButton2",
//		                 name: "customButton2",
//		                 style: "background:url('/resources/admin/yooncomseditor/images/drag_table.png'); background-size:20px 18px;",
//		                 action: function () {
//		                     alert('Custom Menu2 !!');
//		                 }
//		             }
//		         ],			         
		         customMagicLineStyle: 'background-color:#0000ff;',//표 위아래 문단 추가 버튼의 스타일 지정			        
		         defaultTableWidth: 400, //표 생성시 기본 가로 사이즈 지정
		        
		         /*///////////////// New Options ///////////////// */			       
		         tableSelectImageURL : '/resources/admin/yooncomseditor/images/cross_arrow.png',  //표 전체 선택을 위한 이미지 URL 지정 (변경 지양)			         
		         tableMoveHandlerImageURL : '/resources/admin/yooncomseditor/images/movehandler.png',//표 이동시 사용할 이미지 URL 지정 (변경 지양)			         
		         tableMoveImageURL : '/resources/admin/yooncomseditor/images/drag_table.png', //표 드래그시 사용할 이미지 URL 지정 (변경 지양)			        
		         defaultEditorStylePath : '/resources/admin/yooncomseditor/stylesheets/editor_style.css', //Editor 내부에서 사용할 Style 지정 CSS 파일 (지양)

		         //xhtml1.1 Doc Type 지정 예  (default null [Doctype 없음] )
		         defaultDocType : null, //{docType : 'xhtml1.1', publicId : '-//W3C//DTD XHTML 1.1//EN', systemId : 'http://www.w3c.org/TR/xhtml11/DTD/xhtml11.dtd'},
		         defaultCharset : 'utf-8', //Default Character Set 지정 예 (default utf-8)			        
		         useSecurityScript : true, //Script Tag 제거 (script, vbscript) (default true)
		         useSecurityEvent : true,//DOM의 on-Event 제거 (false시 on-event들을 전체를 제거안함)
		         notRemoveEventTypes : [], // ['onclick','mousedown' .... n]; //제거하지 않을 Event의 Type들 지정 예 [ Array로 입력되는 on-Event는 제거되지 않습니다 ]
				 tabSpaceSize : 4,//Tab Size 지정 (Default 4)			         
		         usePasteFilterForChrome : true,//Chrome Filter Paste Options (default true)			        
		         usePasteConfirmForChrome : true, //HTML & Image Confirm Option (default true)			        
		         useFirstFocus : false, //Editor Load시 Focus 주입 여부 적용 (default true)			         
		         useLockMenu : false,//Toolbar에 Table/Cell Lock 기능 사용 설정			         
		         lockImageURL : '/resources/admin/yooncomseditor/images/lock.png', //Table / Cell Lock Image URL 설정			    
		         toolGroup : 'cn',
		         colorPicker : { //Color Picker 값 수정
		             simpleColor :   ["ffffff", "000000", "eeece1", "1f497d", "4f81bd", "c0504d", "9bbb59", "8064a2", "4bacc6", "f79646"],
		             standardColor : ["f2f2f2", "808080", "ddd9c3", "c6d9f1", "dce6f2", "f2dcdb", "ebf1de", "e6e0ec", "dbeee0", "fdeada",
		                 "d9d9d9", "595959", "c4bd97", "8eb4e3", "b9cde5", "e6b9b8", "d7e4bd", "ccc1da", "b7dee8", "fcd5b5",
		                 "bfbfbf", "404040", "948a54", "558ed5", "95b3d7", "d99694", "c3d69b", "b3a2c7", "93cddd", "fac090",
		                 "a6a6a6", "262626", "4a452a", "17375e", "376092", "953735", "77933c", "604a7b", "31859c", "e46c0a",
		                 "808080", "0d0d0d", "1e1c11", "10243f", "254061", "632523", "4f6228", "403152", "215968", "984807"],
		             normalColor   : ["c00000", "ff0000", "ffc000", "ffff00", "92d050", "00b050", "00b0f0", "0000ff", "002060", "7030a0"]
		         }, 
		         useAdjustForChrome : true,			         
		         useNoneBorderVisualize : true, //Default : false //Cell None Border Visualize			         
		         lineHeight : [{name: "0.5", value: "0.5"}, {name: "1.5", value: "1.5"}],//사용할 Line Height 설정			         
		         usePasteRemoveFontFamily : true, // Paste시 Content의 Font-family 제거 
		         useHtmlModeTextIndent : true,  // HTML Mode에서 Text만 별도로 Indent 처리 할지 여부 설정
		         fileUploadURL : '/admin/cm/yoonEdFileUpload.do',
		         imageUploadURL : '/admin/cm/yoonEdFileUpload.do',
		         initHTML : con
		        }
		 	);
}
