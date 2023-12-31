/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see https://ckeditor.com/legal/ckeditor-oss-license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here.
	// For complete reference see:
	// https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_config.html

	// The toolbar groups arrangement, optimized for two toolbar rows.
	
	//config.filebrowserUploadUrl      = '/upld/uploadFile.do?type=Files',
	config.extraPlugins = 'uploadimage';
	config.filebrowserImageUploadUrl = '/editorFileUpload.do?type=Images';
	config.image_previewText = ' ';
	
	config.toolbarGroups = [
		{ name: 'clipboard',   groups: [ 'clipboard', 'undo' ] },
		{ name: 'editing',     groups: [ 'find', 'selection', 'spellchecker' ] },
		{ name: 'links' },
		{ name: 'insert' },
		{ name: 'forms' },
		{ name: 'tools' },
		{ name: 'document',	   groups: [ 'mode', 'document', 'doctools' ] },
		{ name: 'others' },
		'/',
		{ name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
		{ name: 'paragraph',   groups: [ 'list', 'indent', 'blocks', 'align', 'bidi' ] },
		{ name: 'styles' },
		{ name: 'colors' },
		{ name: 'about' }
	];

	// Remove some buttons provided by the standard plugins, which are
	// not needed in the Standard(s) toolbar.
	config.removeButtons = 'Underline,Subscript,Superscript';

	// Set the most common block elements.
	config.format_tags = 'p;h1;h2;h3;pre';

	// Simplify the dialog windows.
	config.removeDialogTabs = 'image:advanced;link:advanced';
};
CKEDITOR.on('dialogDefinition', function( ev ){
	var dialog = ev.data.definition.dialog;
	var dialogName = ev.data.name;
    var dialogDefinition = ev.data.definition;
    
    switch (dialogName) {
        case 'image': // 이미지 속성창이 보일때 안보이게 하기 위해서 .
            //dialogDefinition.removeContents('info');
            dialogDefinition.removeContents('Link');
            dialogDefinition.removeContents('advanced');
            
            dialog.on('show', function (obj) {
        		this.selectPage('Upload'); //업로드텝으로 시작
            });
            break;
    }
});

/*CKEDITOR.on( 'fileUploadRequest', function( evt ) {
	debugger;
    var xhr = evt.data.fileLoader.xhr;

    xhr.setRequestHeader( 'Cache-Control', 'no-cache' );
    xhr.setRequestHeader( 'X-File-Name', this.fileName );
    xhr.setRequestHeader( 'X-File-Size', this.total );
    xhr.send( this.file );

    // Prevented the default behavior.
    evt.stop();
} );*/

CKEDITOR.on('instanceReady', function (ev) {
	var header = $("meta[name='_csrf_header']").attr("content");
	var token = $("meta[name='_csrf']").attr("content");
    ev.editor.on( 'fileUploadRequest', function( evt ) {
        var xhr = evt.data.fileLoader.xhr;
      
        xhr.setRequestHeader( 'Cache-Control', 'no-cache' );
        xhr.setRequestHeader( header, token );
        xhr.withCredentials = true;

    } );

});

