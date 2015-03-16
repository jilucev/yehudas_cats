/**
 * AdminController
 *
 * @description :: Server-side logic for managing admins
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	findAllAdmins: function(rer, res) {
    return Admin.find()
    .then(function(admins){
      return res.view('setup-test', {
        admins: admins
      })      
    });
  }
};

