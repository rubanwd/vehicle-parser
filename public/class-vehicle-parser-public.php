<?php

/**
 * The public-facing functionality of the plugin.
 *
 * @link       https://www.upwork.com/fl/serhiir
 * @since      1.0.0
 *
 * @package    Vehicle_Parser
 * @subpackage Vehicle_Parser/public
 */

/**
 * The public-facing functionality of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the public-facing stylesheet and JavaScript.
 *
 * @package    Vehicle_Parser
 * @subpackage Vehicle_Parser/public
 * @author     Serhii Ruban <rubanwd@gmail.com>
 */
class Vehicle_Parser_Public {

	/**
	 * The ID of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $plugin_name    The ID of this plugin.
	 */
	private $plugin_name;

	/**
	 * The version of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $version    The current version of this plugin.
	 */
	private $version;

	/**
	 * Initialize the class and set its properties.
	 *
	 * @since    1.0.0
	 * @param      string    $plugin_name       The name of the plugin.
	 * @param      string    $version    The version of this plugin.
	 */
	public function __construct( $plugin_name, $version ) {

		$this->plugin_name = $plugin_name;
		$this->version = $version;

	}

	/**
	 * Register the stylesheets for the public-facing side of the site.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_styles() {

		/**
		 * This function is provided for demonstration purposes only.
		 *
		 * An instance of this class should be passed to the run() function
		 * defined in Vehicle_Parser_Loader as all of the hooks are defined
		 * in that particular class.
		 *
		 * The Vehicle_Parser_Loader will then create the relationship
		 * between the defined hooks and the functions defined in this
		 * class.
		 */


		wp_enqueue_style( 'aos', 'https://unpkg.com/aos@2.3.1/dist/aos.css' );

		wp_enqueue_style( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'css/vehicle-parser-public.css', array(), $this->version, 'all' );

	}

	/**
	 * Register the JavaScript for the public-facing side of the site.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_scripts() {

		/**
		 * This function is provided for demonstration purposes only.
		 *
		 * An instance of this class should be passed to the run() function
		 * defined in Vehicle_Parser_Loader as all of the hooks are defined
		 * in that particular class.
		 *
		 * The Vehicle_Parser_Loader will then create the relationship
		 * between the defined hooks and the functions defined in this
		 * class.
		 */


	   global $post;

	   if(has_shortcode($post->post_content, "manheim-veh-pars")){


	   		


	        wp_enqueue_script('vue', 'https://cdn.jsdelivr.net/npm/vue/dist/vue.js');

	        wp_enqueue_script('vue-router', 'https://unpkg.com/vue-router/dist/vue-router.js');


	        wp_enqueue_script('aos', 'https://unpkg.com/aos@2.3.1/dist/aos.js');




	        wp_enqueue_script( "vehicle-search-component", plugin_dir_url( __FILE__ ) .'js/modules/vehicles-search-component.js' );
	        


	        wp_register_script( "parser_script", plugin_dir_url( __FILE__ ) .'js/vehicle-parser-public.js', array('jquery'), $this->version, false );




	   		wp_localize_script( 'parser_script', 'myAjax', array( 'ajaxurl' => admin_url( 'admin-ajax.php' ))); 

	   		wp_localize_script( 'parser_script', 'siteURL', array( 'url' => get_option('siteurl')));

	   		wp_enqueue_script( 'parser_script' );

	   		
	   }           


	    


	}





	 

		public function show_vehicles(){






			ob_start(); ?>
		    <div id="app">


				
		    	
		    </div>

			


			<?php



		    return ob_get_clean();



		}
		 
	

		public function get_vehicles() {

			$body = array(
			    'pageSize' => $_REQUEST["pageSize"],
			    'pageNumber' => $_REQUEST["pageNumber"],

			    'MAKE' => $_REQUEST["make"],
			    'MODEL' => $_REQUEST["model"]



			    // 'MAKE' => 101000019,
			    // 'MODEL' => 102001340
			);


			$headers = [
				'Content-Type' => 'application/x-www-form-urlencoded'
			];
			 
			$args = array(
			    'body' => $body,
			    'headers' => $headers
			);

			$response = wp_remote_post( 'https://api.manheim.com/isws-basic/listings?api_key=6m8jspq52238t57kaqbvdcqe', $args );

			$api_response = wp_remote_retrieve_body( $response );

			header("Content-type: application/json; charset=utf-8");

			echo $api_response;

		    die();

		}




		public function get_models() {


				

			$makes = $_REQUEST["make"];

			// $api_key = '6m8jspq52238t57kaqbvdcqe';

 			$routeURL = 'https://api.manheim.com/isws-basic/parameters/MODEL?api_key=6m8jspq52238t57kaqbvdcqe&makes='.$makes;


			$response = wp_remote_get( $routeURL );

			$api_response = wp_remote_retrieve_body( $response );

			echo $api_response;

		    die();

		}

		




		public function wpa3396_page_template( $page_template ) {
		    if ( is_page( 'vehicle' ) ) {
		        $page_template = dirname( __FILE__ ) . '/partials/single-vehicle-template.php';
		    }
		    return $page_template;
		}






}
