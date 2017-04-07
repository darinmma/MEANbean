angular.module('beansApp')
.controller('BeansController', BeansController)

//minification safe
BeansController.$inject = ['$http']
function BeansController($http){
  var self = this
  self.all = []
  self.newBean = {}

  self.addBean = addBean
  self.getBeans = getBeans
  self.deleteBean = deleteBean
  self.editBean = editBean
  self.setBean = setBean
  self.selectedBean = {}

  // Prepopulate self.all with beans from API
  getBeans()

  function getBeans(){
    $http
      .get('/api/beans')
      .then(function(response){
        self.all = response.data
    })
  }

  function addBean(){
    $http
      .post('/api/beans', self.newBean)
      .then(function(response){
        getBeans()
    })
    self.newBean = {}
  }

  function setBean(bean){
    self.selectedBean = bean
  }

  function editBean(bean){
    $http
      .patch('/api/beans/' + self.selectedBean._id, self.selectedBean)
      .then(function(response){
        getBeans()
      })
      self.selectedBean = {}
  }

  function deleteBean(bean){
    $http
      .delete("/api/beans/" + bean._id)
      .then(function(response){
        getBeans()
      })
  }

}
