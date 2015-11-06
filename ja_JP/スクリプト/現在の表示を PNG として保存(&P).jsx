#target illustrator

(function(){

	function main(document){
		if (!document) { return; }

		var folder = document.path && document.path.exists ? new Folder(document.path.fullName) : Folder.myDocuments;
		var file = new File(folder.fullName + "/" + document.name + ".png");

		file = file.saveDlg("�ۑ����I�����Ă�������", "*.png");
		if (!file) { return; }
		
		var dpi = 72;
		var scale = (dpi / 72) * 100;
		var options = new ExportOptionsPNG24();
		options.antiAliasing     = true;
		options.transparency     = true;
		options.artBoardClipping = true;
		options.verticalScale    = scale;
		options.horizontalScale  = scale;

		document.exportFile(file, ExportType.PNG24, options);
		alert("�G�N�X�|�[�g���������܂����B", "���");
	}
	
	try {
		if (app.documents.length > 0 ) {
			main(app.activeDocument);
		} else {
			throw new Error("�t�@�C�����J����Ă��܂���B");
		}
	} catch(e) {
		alert(e.message, "Script Error", true);
	}
})();
