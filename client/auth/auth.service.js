/*
* Auth Service es el Service que gestiona el proceso de
* Longin de la aplicacion
*/
'use strict';

function AuthService($auth, $state, localStorageService, $mdDialog) {
	// AngularJS will instantiate a singleton by calling "new" on this function
	//auth:depedencia del login que viene de satellizer.

  var Auth = { 		
		login: login,
		logout: logout,
		isAdmin: isAdmin,
		isUser: isUser,
		isAuthenticated: isAuthenticated,
		//userlog: userlog,
		//alluser: alluser,
		//getRoles: getRoles,
		//getIdUser: getIdUser
	};
    function login(user, collback) {
        $auth.login(user)
            .then(response => {
                console.log('Login ok', response);
                console.log(Auth.isAdmin());
                if (Auth.isAdmin()) {
                    $state.go('admin');
                } else {
                    $state.go('main');
                }
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
    };
	/*function getIdUser() {
		if (Auth.isAuthenticated()) {
			return $auth.getPayload().sub;
		} else {
			return null;
		}
	}

	/*function alluser() {
		if (($auth.isAdmin()) || ($auth.isUser())) {
			return true;
		} else {
			return false;
		}
	}*/

	function logout() {
		if (Auth.isAuthenticated()) {
			$auth.logout()
				.then(response => {
					$state.go('main');
					console.log("salida ok")
				})
		}
	}

	/*function userlog() {
		if ($auth.isAuthenticated()) {
			return $auth.getPayload().user;
		}
	}

	function getRoles() {
		if ($auth.isAuthenticated()) {
			return $auth.getPayload().roles;
		}else{
			return false;
		}
	}*/

	function isAdmin() {
		if (Auth.isAuthenticated()) {
			console.log("roles"$auth.getPayload().roles);
			if ($auth.getPayload().roles.indexOf("ADMINISTRADOR") !== -1) {
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
			if ($auth.getPayload().roles.indexOf("CONTRATISTA") !== -1) {
				return true;
			} else {
				return false;
			}
		} else {
			return false;
		}
	}
	/*function isOwner() {
		if (Auth.isAuthenticated()) {

			if ($auth.getPayload().roles.indexOf("OWNER") !== -1) {
				return true;
			} else {
				return false;
			}
		} else {
			return false;
		}
	}*/
	function isAuthenticated() {
		if ($auth.isAuthenticated()) {
			return true;
		} else {
			return false;
		}
	}
	return Auth;
}
angular.module("contratista2017App")
.factory("AuthService",AuthService);




