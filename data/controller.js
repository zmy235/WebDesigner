angular.module('app', ['pascalprecht.translate', 'ngSanitize', 'ngAnimate', 'bc.AngularDisableAnimate', 'ui.router'])

  .config(function ($translateProvider) {
    $translateProvider.translations('en', {
      'TITLE': 'Web developer & designer.',
      'DESCRIPTION': 'I\'m a web developer and designer living in Bogotá, CO. I conceive, develop and empower ideas on the web, at the intersection between design, art and tech.',
      'READ_MORE': 'Read more',
      'READ_LESS': 'Read less',

      'OTHER_LANGUAGE': 'Es',

      'MAY': 'May',
      'JUL': 'July',
      'AGO': 'August',
      'OCT': 'October',
      'SEP': 'September',

      'DESIGN': 'Design',
      'APP_DESIGN': 'App Design',
      'DEVELOPMENT': 'Development',
      'ART': 'Art',
      'PORTFOLIO': 'Portfolio',

      'VISIT': 'Visit',
      'SEE_MORE': 'See more',

      'PORC_SUBTITLE': 'Expense tracking web app',
      'PORC_P1': 'After trying most available solutions to finance tracking on the web (and being unsatisfied with a few not-so-little quirks) I finally caved. Having been developing on the web for a while already, I decided to design and develop a full fledged web app on my own, with a focus on delivering a useful, production-ready product with as much attention to detail as possible.',
      'PORC_P2': 'Porc is the result of that process.',

      'BECOMEACURATOR_SUBTITLE': 'Curatorial statement generator',
      'BECOMEACURATOR_P1': 'Intended as a tongue-in-cheek reflexion on the vagueness of art discourse, Become a curator generates random artsy statements, composed of clear but meaningless sentences. This process uses Markov Chains to generate statistical models based on word frequency. These models are run through random iterations to generate the body of text.',
      'BECOMEACURATOR_P2': 'This project was conceived, designed and developed along with my greatest accomplice (and awesome sister) Juliana Castro.',

      'MAGICMARKERS_SUBTITLE': 'Website development and redesign',
      'MAGICMARKERS_P1': 'Having worked with video production company Magic Makers for a while already, tacking their own webpage was a fun task. With a 10 people team with no designers or developers, the company\'s old website was getting stale. Without much brand baggage prior to the redesign, I had to come up with a dynamic, user-centric but also content-heavy website design and brand identity for Magic Markers.',
      'MAGICMARKERS_P2': 'Although the final version isn\'t live yet as of October, we\'re getting there.',

      'DEJEMOSDEMATARNOS_SUBTITLE': 'Website development and design',
      'DEJEMOSDEMATARNOS_P1': 'Dejemos de matarnos intends to explain the gist of the final agreement of the Colombian peace process (2012-2016). Comissioned by Forjando Paz, 5 videos were created by production company Magic Markers, to explain the particular points of the agreement. My job was to design a bright, content-centered website to showcase them.',
      'DEJEMOSDEMATARNOS_P2': 'This project was developed along with Magic Markers, who produced the videos and the website structure and content.',

      'JULIANACASTROV_SUBTITLE': 'Portfolio website',
      'JULIANACASTROV_P1': 'Julianacastrov.com is a design portfolio for graphic designer Juliana Castro (who also happens to be my sister). We took upon creating an online home for her work, as well as some of her photography and illustration incursions. As my oldest and dearest project, it\'s been revisited and redesigned a few times already, and I keep it on here as a dear reminder of why I got engaged in web development in the first place. ♥',
      'JULIANACASTROV_P2': '',

    });
   
    $translateProvider.translations('es', {
      'TITLE': 'Diseñador y desarollador web.',
      'DESCRIPTION': 'Soy diseñador y desarollador web en Bogotá, CO. Concibo, desarrollo y empodero experiencias en la web, en la intersección entre el diseño, el arte y la tecnología.',
      'READ_MORE': 'Leer más',
      'READ_LESS': 'Leer menos',

      'OTHER_LANGUAGE': 'En',

      'MAY': 'Mayo',
      'JUL': 'Julio',
      'AGO': 'Agosto',
      'OCT': 'Octubre',
      'SEP': 'Septiembre',

      'DESIGN': 'Diseño',
      'APP_DESIGN': 'Diseño de app',
      'DEVELOPMENT': 'Desarrollo',
      'ART': 'Arte',
      'PORTFOLIO': 'Portafolio',

      'VISIT': 'Visitar',
      'SEE_MORE': 'Ver más',


      'PORC_SUBTITLE': 'App web para manejo de gastos',
      'PORC_P1': 'Después de probar la mayoría de las soluciones disponibles para seguimiento de gastos en internet (y la insatisfacción con algunos caprichos), finalmente cedí. Habiendo desarrollado en la web desde hace ya un rato, decidí diseñar y desarrollar una aplicación web en toda regla por mi cuenta, con un enfoque en lograr un producto útil, con tanta atención al detalle como fue posible.',
      'PORC_P2': 'Porc es el resultado de ese proceso.',

      'BECOMEACURATOR_SUBTITLE': 'Generador de textos curatoriales',
      'BECOMEACURATOR_P1': 'Pretendiendo hacer una una reflexión irónica sobre la vaguedad del discurso artístico, Become a curator genera textos curatoriales al azar, compuestos de frases claras, pero sin sentido. Este proceso utiliza cadenas de Markov para generar modelos estadísticos basados en la frecuencia de palabras. Estos modelos se ejecutan en iteraciones aleatorias para generar un cuerpo de texto.',
      'BECOMEACURATOR_P2': 'Este proyecto fue concebido, diseñado y desarrollado junto con mi gran cómplice (y hermana) Juliana Castro.',

      'MAGICMARKERS_SUBTITLE': 'Desarrollo y rediseño de página web',
      'MAGICMARKERS_P1': 'Después de haber trabajado con la productora de videos Magic Makers por un tiempo ya, trabajar en su propia página web fue una tarea entretenida. Con un equipo de 10 personas sin diseñadores o desarrolladores, el viejo sitio web de la compañía necesitaba un cambio extremo. Sin mucho contexto de marca antes del rediseño, tuve que crear una identidad web dinámica, centrada en el usuario, pero también con una gran cantidad de contenido.',
      'MAGICMARKERS_P2': 'A pesar de que la versión final aún no está activa para octubre, la página será lanzada muy pronto.',

      'DEJEMOSDEMATARNOS_SUBTITLE': 'Desarrollo y diseño de página web',
      'DEJEMOSDEMATARNOS_P1': 'Dejemos de matarnos pretende de explicar la esencia del acuerdo final del proceso de paz en Colombia (2012-2016). Encargado por Forjando Paz, 5 videos fueron creados por la productora Magic Markers, para explicar los puntos particulares del acuerdo. Mi trabajo consistía en diseñar un sitio web conciso y centrado en los contenido, para mostrarlos.',
      'DEJEMOSDEMATARNOS_P2': 'Este proyecto fue desarrollado junto con Magic Markers, que produjo los videos y la estructura del sitio web y su contenido.',

      'JULIANACASTROV_SUBTITLE': 'Página web portafolio',
      'JULIANACASTROV_P1': 'Julianacastrov.com es un portafolio de diseño para la diseñadora gráfica Juliana Castro (quien es también mi hermana). Quisimos crear un hogar en línea para su trabajo, así como algunas de sus incursiones en fotografía e ilustración. Siendo mi proyecto más antiguo y más querido, y que ha sido revisado y rediseñado varias veces ya, lo guardo con cariño aquí como recordatorio de por qué me enamoré del desarrollo web en el primer lugar. ♥',

    });
   
    $translateProvider.preferredLanguage('en');
  })

  .config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');
    // $urlRouterProvider.when('/a', '/a/overview');
    // $locationProvider.html5Mode(true);
    $stateProvider
      // login page
      .state('main', {
        url         : '/',
        templateUrl : 'views/index.tpl.html'
      })
      .state('porc', {
        url         : '/porc',
        templateUrl : 'views/porc.tpl.html',
        controller  : 'inner'
      })
      .state('becomeacurator', {
        url         : '/becomeacurator',
        templateUrl : 'views/becomeacurator.tpl.html',
        controller  : 'inner'
      })
      .state('magicmarkers', {
        url         : '/magicmarkers',
        templateUrl : 'views/magicmarkers.tpl.html',
        controller  : 'inner'
      })
      .state('dejemosdematarnos', {
        url         : '/dejemosdematarnos',
        templateUrl : 'views/dejemosdematarnos.tpl.html',
        controller  : 'inner'
      })
      .state('julianacastrov', {
        url         : '/julianacastrov',
        templateUrl : 'views/julianacastrov.tpl.html',
        controller  : 'inner'
      })
  })

  .controller('ctrl', function($scope, $translate, $rootScope, $state, $window) {

    $rootScope.$state = $state;

    $rootScope.$on('$stateChangeStart', function (event, toState){ 
      $scope.readMore = false;
      $('#collapseExample').collapse('hide');
    });

    var userLang = ($window.navigator.language || $window.navigator.userLanguage).substring(0, 2);

    console.log(userLang);

    if (userLang === 'es') {
      $translate.use('es');
    } else {
      $translate.use('en');
    }

    $scope.toggleLanguage = function() {
      if ($translate.proposedLanguage() === 'en') {
        $translate.use('es');
      } else {
        $translate.use('en');
      }
    }
  })

  .controller('inner', function($scope, $translate, $rootScope) {
    jQuery(document).ready(function($) {
      $('.slider').unslider({
        arrows: true,
        infinite: true,
        // animateHeight: true
      });
    });
  });