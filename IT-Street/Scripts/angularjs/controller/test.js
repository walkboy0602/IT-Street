
ShopApp.controller('TestCtrl', function ($scope, $upload) {
    console.log('This is angular implementation testing');
});



ShopApp.controller('ProductImageCtrl', function ($scope, $timeout) {
    console.log('This is angular implementation testing');
    $scope.fileReaderSupported = window.FileReader != null && (window.FileAPI == null || FileAPI.html5 != false);

    $scope.draftFiles = [];

    $scope.generateThumb = function (file) {

        console.log(file);

        if (file != null) {
            if ($scope.fileReaderSupported && file.type.indexOf('image') > -1) {
                $timeout(function () {
                    var fileReader = new FileReader();
                    fileReader.readAsDataURL(file);
                    fileReader.onload = function (e) {
                        file.dataUrl = e.target.result;
                        $timeout(function () {
                            file.dataUrl = e.target.result;
                            $scope.draftFiles.push({
                                Src: e.target.result
                            });
                        });
                    }
                });
            }
        }
    }

});