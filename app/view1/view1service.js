
angular.module('myApp.view1').factory('courseImages', function() {
    return {
        getCourseImage: function (course) {
            if (course == ('java')) {
                return 'http://38.media.tumblr.com/875b5eeb5b1efa37d2e9d36fbad836d3/tumblr_mzczesVrZD1rimr6yo1_1280.jpg';
            }
            else {
                return 'http://31.media.tumblr.com/bc0ea7c5f95701bff499f78b59d23e68/tumblr_mr74z9Lt3O1rs0z5go1_500.jpg';
            }
            /* if(course.equals('java')){
             return 'https://www.google.com/search?site=&tbm=isch&source=hp&biw=1366&bih=623&q=java&oq=java&gs_l=img.3..35i39k1j0l9.3089.3513.0.4243.5.5.0.0.0.0.208.326.0j1j1.2.0....0...1ac.1.64.img..3.2.322.0.ZKVifmOVgPo#imgrc=eTfy5GzS8R0XHM%3A';
             }
             else if(course == 'angularjs'){
             return 'https://www.google.com/search?site=&tbm=isch&source=hp&biw=1366&bih=623&q=java&oq=java&gs_l=img.3..35i39k1j0l9.3089.3513.0.4243.5.5.0.0.0.0.208.326.0j1j1.2.0....0...1ac.1.64.img..3.2.322.0.ZKVifmOVgPo#tbm=isch&q=angularjs&imgrc=oOAgsXFSXr6uvM%3A';
             }
             else if(course == 'php' ){
             return 'https://www.google.com/search?site=&tbm=isch&source=hp&biw=1366&bih=623&q=java&oq=java&gs_l=img.3..35i39k1j0l9.3089.3513.0.4243.5.5.0.0.0.0.208.326.0j1j1.2.0....0...1ac.1.64.img..3.2.322.0.ZKVifmOVgPo#tbm=isch&q=php&imgrc=jExDa1YGSJPQsM%3A';
             }
             else {
             return '   Nothing  ';
             }*/

        }
    }
});