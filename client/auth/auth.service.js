'use strict';

function authService($auth, $state, usuariosService,localStorageService, $mdDialog){

var Auth = {
  login: login,
  logout: logout,
  isAdmin: isAdmin,
  isUser: isUser,
  isOwner: isOwner,
  isAuthenticated: isAuthenticated,
  userlog: userlog,
  //alluser: alluser,
  getRoles: getRoles,
  getIdUser: getIdUser,
  //idUsuario: idUsuario,
  //datosUsuario: datosUsuario,
  //getImagenPerfil:getImagenPerfil
};

function login(user, collback) {
		$auth.login(user)
			.then(response => {
				console.log('Login ok', response);
				if (Auth.isOwner() || Auth.isAdmin()) {
					$state.go('core-institution.notifications-list');
				}else {
					$state.go('main');
				}
				//localStorageService.setData('idUsuario',Auth.getIdUser());
			})
			.catch(err => {
				console.log('Error de login', err);
				$mdDialog.show(
					$mdDialog.alert()
					  .parent(angular.element(document.querySelector('#popupContainer')))
					  .clickOutsideToClose(true)
					  .title('Error de login :(')
					  .textContent('Verifica si los datos ingresados son correctos.')
					  .ariaLabel('Alert Dialog Demo')
					  .ok('Cerrar')
				  );
			});
	}

	function getIdUser() {
		if (Auth.isAuthenticated()) {
			return $auth.getPayload().sub;
		} else {
			return null;
		}
	}

	/*function alluser() {
		if ((Auth.isAdmin()) || (Auth.isUser())) {
			return true;
		} else {
			return false;
		}
	}*/

	function logout() {
		if ($auth.isAuthenticated()) {
			$auth.logout()
				.then(response => {
					$state.go('main');
				})
		}
	}

	function userlog() {
		if (Auth.isAuthenticated()) {
			return $auth.getPayload().user;
		}
	}

	function getRoles() {
		if (Auth.isAuthenticated()) {
			return $auth.getPayload().roles
		}else{
			return false;
		}
	}

	function isAdmin() {
		if (Auth.isAuthenticated()) {
			//console.log($auth.getPayload().roles);
			if ($auth.getPayload().roles.indexOf("ADMIN") !== -1) {
				return true;
			} else {
				return false;
				console.log("no es admin");
			}
		} else {
			return false;
			console.log("no esta");
		}
	}

	function isUser() {
		if (Auth.isAuthenticated()) {

			if ($auth.getPayload().roles.indexOf("USER") !== -1) {
				return true;
			} else {
				return false;
			}
		} else {
			return false;
		}
	}

	function isOwner() {
		if (Auth.isAuthenticated()) {

			if ($auth.getPayload().roles.indexOf("OWNER") !== -1) {
				return true;
			} else {
				return false;
			}
		} else {
			return false;
		}
	}

	function isAuthenticated() {
		if ($auth.isAuthenticated()) {
			return true;
		} else {
			return false;
		}
	}
  return Auth;
}

authService.$inject = ['$auth', '$state','usuariosService', 'localStorageService','$mdDialog'];
angular.module('contratista2017App')
  .factory('authService', authService);
