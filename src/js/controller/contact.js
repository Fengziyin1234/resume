(function() {
    'use strict';

    angular.module('ResumeApp')
        .controller('ContactController', ContactController);

    ContactController.$inject = ['$scope', '$window', '$timeout'];

    function ContactController($scope, $window, $timeout) {


        $scope.time = new Date();
        console.log("run");
        $scope.information = {
            firstname: "",
            lastname: "",
            email: "",
            tel: "",
            location: "United States of America",
            locations: [
                { "key": "united_states_of america", "value": "United States of America" },
                { "key": "afghanistan", "value": "Afghanistan" },
                { "key": "aland_islands", "value": "Aland Islands" },
                { "key": "albania", "value": "Albania" },
                { "key": "algeria", "value": "Algeria" },
                { "key": "american_samoa", "value": "American Samoa" },
                { "key": "andorra", "value": "Andorra" },
                { "key": "angola", "value": "Angola" },
                { "key": "anguilla", "value": "Anguilla" },
                { "key": "antarctica", "value": "Antarctica" },
                { "key": "antigua_and_barbuda", "value": "Antigua and Barbuda" },
                { "key": "argentina", "value": "Argentina" },
                { "key": "armenia", "value": "Armenia" },
                { "key": "aruba", "value": "Aruba" },
                { "key": "australia", "value": "Australia" },
                { "key": "austria", "value": "Austria" },
                { "key": "azerbaijan", "value": "Azerbaijan" },
                { "key": "bahamas", "value": "Bahamas" },
                { "key": "bahrain", "value": "Bahrain" },
                { "key": "bangladesh", "value": "Bangladesh" },
                { "key": "barbados", "value": "Barbados" },
                { "key": "belarus", "value": "Belarus" },
                { "key": "belgium", "value": "Belgium" },
                { "key": "belize", "value": "Belize" },
                { "key": "benin", "value": "Benin" },
                { "key": "bermuda", "value": "Bermuda" },
                { "key": "bhutan", "value": "Bhutan" },
                { "key": "bolivia", "value": "Bolivia" },
                { "key": "bonaire", "value": "Bonaire" },
                { "key": "bosnia_and_herzegovina", "value": "Bosnia and Herzegovina" },
                { "key": "botswana", "value": "Botswana" },
                { "key": "bouvet_island", "value": "Bouvet Island" },
                { "key": "brazil", "value": "Brazil" },
                { "key": "brunei_darussalam", "value": "Brunei Darussalam" },
                { "key": "bulgaria", "value": "Bulgaria" },
                { "key": "burkina_faso", "value": "Burkina Faso" },
                { "key": "burundi", "value": "Burundi" },
                { "key": "cabo_verde", "value": "Cabo Verde" },
                { "key": "cambodia", "value": "Cambodia" },
                { "key": "cameroon", "value": "Cameroon" },
                { "key": "canada", "value": "Canada" },
                { "key": "cayman_islands", "value": "Cayman Islands" },
                { "key": "central_african_republic", "value": "Central African Republic" },
                { "key": "chad", "value": "Chad" },
                { "key": "chile", "value": "Chile" },
                { "key": "china", "value": "China" },
                { "key": "christmas_island", "value": "Christmas Island" },
                { "key": "cocos_islands", "value": "Cocos Islands" },
                { "key": "colombia", "value": "Colombia" },
                { "key": "comoros", "value": "Comoros" },
                { "key": "congo", "value": "Congo" },
                { "key": "congo", "value": "Congo" },
                { "key": "cook_islands", "value": "Cook Islands" },
                { "key": "costa_rica", "value": "Costa Rica" },
                { "key": "cote_d'ivoire", "value": "Cote d'Ivoire" },
                { "key": "croatia", "value": "Croatia" },
                { "key": "cuba", "value": "Cuba" },
                { "key": "curacao", "value": "Curacao" },
                { "key": "cyprus", "value": "Cyprus" },
                { "key": "czech_republic", "value": "Czech Republic" },
                { "key": "denmark", "value": "Denmark" },
                { "key": "djibouti", "value": "Djibouti" },
                { "key": "dominica", "value": "Dominica" },
                { "key": "dominican_republic", "value": "Dominican Republic" },
                { "key": "ecuador", "value": "Ecuador" },
                { "key": "egypt", "value": "Egypt" },
                { "key": "el_salvador", "value": "El Salvador" },
                { "key": "equatorial_guinea", "value": "Equatorial Guinea" },
                { "key": "eritrea", "value": "Eritrea" },
                { "key": "estonia", "value": "Estonia" },
                { "key": "ethiopia", "value": "Ethiopia" },
                { "key": "falkland_islands", "value": "Falkland Islands" },
                { "key": "faroe_islands", "value": "Faroe Islands" },
                { "key": "fiji", "value": "Fiji" },
                { "key": "finland", "value": "Finland" },
                { "key": "france", "value": "France" },
                { "key": "french_guiana", "value": "French Guiana" },
                { "key": "french_polynesia", "value": "French Polynesia" },
                { "key": "french_southern_territories", "value": "French Southern Territories" },
                { "key": "gabon", "value": "Gabon" },
                { "key": "gambia", "value": "Gambia" },
                { "key": "georgia", "value": "Georgia" },
                { "key": "germany", "value": "Germany" },
                { "key": "ghana", "value": "Ghana" },
                { "key": "gibraltar", "value": "Gibraltar" },
                { "key": "greece", "value": "Greece" },
                { "key": "greenland", "value": "Greenland" },
                { "key": "grenada", "value": "Grenada" },
                { "key": "guadeloupe", "value": "Guadeloupe" },
                { "key": "guam", "value": "Guam" },
                { "key": "guatemala", "value": "Guatemala" },
                { "key": "guernsey", "value": "Guernsey" },
                { "key": "guinea", "value": "Guinea" },
                { "key": "guinea-bissau", "value": "Guinea-Bissau" },
                { "key": "guyana", "value": "Guyana" },
                { "key": "haiti", "value": "Haiti" },
                { "key": "heard_and_mcdonald_islands", "value": "Heard and McDonald Islands" },
                { "key": "holy_see", "value": "Holy See" },
                { "key": "honduras", "value": "Honduras" },
                { "key": "hong_kong", "value": "Hong Kong" },
                { "key": "hungary", "value": "Hungary" },
                { "key": "iceland", "value": "Iceland" },
                { "key": "india", "value": "India" },
                { "key": "indonesia", "value": "Indonesia" },
                { "key": "iran", "value": "Iran" },
                { "key": "iraq", "value": "Iraq" },
                { "key": "ireland", "value": "Ireland" },
                { "key": "isle_of_man", "value": "Isle of Man" },
                { "key": "israel", "value": "Israel" },
                { "key": "italy", "value": "Italy" },
                { "key": "jamaica", "value": "Jamaica" },
                { "key": "japan", "value": "Japan" },
                { "key": "jersey", "value": "Jersey" },
                { "key": "jordan", "value": "Jordan" },
                { "key": "kazakhstan", "value": "Kazakhstan" },
                { "key": "kenya", "value": "Kenya" },
                { "key": "kiribati", "value": "Kiribati" },
                { "key": "korea", "value": "Korea" },
                { "key": "korea", "value": "Korea" },
                { "key": "kuwait", "value": "Kuwait" },
                { "key": "kyrgyzstan", "value": "Kyrgyzstan" },
                { "key": "lao_peoples", "value": "Lao People's" },
                { "key": "latvia", "value": "Latvia" },
                { "key": "lebanon", "value": "Lebanon" },
                { "key": "lesotho", "value": "Lesotho" },
                { "key": "liberia", "value": "Liberia" },
                { "key": "libya", "value": "Libya" },
                { "key": "liechtenstein", "value": "Liechtenstein" },
                { "key": "lithuania", "value": "Lithuania" },
                { "key": "luxembourg", "value": "Luxembourg" },
                { "key": "macao", "value": "Macao" },
                { "key": "macedonia", "value": "Macedonia" },
                { "key": "madagascar", "value": "Madagascar" },
                { "key": "malawi", "value": "Malawi" },
                { "key": "malaysia", "value": "Malaysia" },
                { "key": "maldives", "value": "Maldives" },
                { "key": "mali", "value": "Mali" },
                { "key": "malta", "value": "Malta" },
                { "key": "marshall_islands", "value": "Marshall Islands" },
                { "key": "martinique", "value": "Martinique" },
                { "key": "mauritania", "value": "Mauritania" },
                { "key": "mauritius", "value": "Mauritius" },
                { "key": "mayotte", "value": "Mayotte" },
                { "key": "mexico", "value": "Mexico" },
                { "key": "micronesia", "value": "Micronesia" },
                { "key": "moldova", "value": "Moldova" },
                { "key": "monaco", "value": "Monaco" },
                { "key": "mongolia", "value": "Mongolia" },
                { "key": "montenegro", "value": "Montenegro" },
                { "key": "montserrat", "value": "Montserrat" },
                { "key": "morocco", "value": "Morocco" },
                { "key": "mozambique", "value": "Mozambique" },
                { "key": "myanmar", "value": "Myanmar" },
                { "key": "namibia", "value": "Namibia" },
                { "key": "nauru", "value": "Nauru" },
                { "key": "nepal", "value": "Nepal" },
                { "key": "netherlands", "value": "Netherlands" },
                { "key": "new_caledonia", "value": "New Caledonia" },
                { "key": "new_zealand", "value": "New Zealand" },
                { "key": "nicaragua", "value": "Nicaragua" },
                { "key": "niger", "value": "Niger" },
                { "key": "nigeria", "value": "Nigeria" },
                { "key": "niue", "value": "Niue" },
                { "key": "norfolk_island", "value": "Norfolk Island" },
                { "key": "northern_mariana_islands", "value": "Northern Mariana Islands" },
                { "key": "norway", "value": "Norway" },
                { "key": "oman", "value": "Oman" },
                { "key": "pakistan", "value": "Pakistan" },
                { "key": "palau", "value": "Palau" },
                { "key": "palestine", "value": "Palestine" },
                { "key": "panama", "value": "Panama" },
                { "key": "papua_new_guinea", "value": "Papua New Guinea" },
                { "key": "paraguay", "value": "Paraguay" },
                { "key": "peru", "value": "Peru" },
                { "key": "philippines", "value": "Philippines" },
                { "key": "pitcairn", "value": "Pitcairn" },
                { "key": "poland", "value": "Poland" },
                { "key": "portugal", "value": "Portugal" },
                { "key": "puerto_rico", "value": "Puerto Rico" },
                { "key": "qatar", "value": "Qatar" },
                { "key": "reunion", "value": "Reunion" },
                { "key": "romania", "value": "Romania" },
                { "key": "russian_federation", "value": "Russian Federation" },
                { "key": "rwanda", "value": "Rwanda" },
                { "key": "saint_barthelemy", "value": "Saint Barthelemy" },
                { "key": "saint_helena", "value": "Saint Helena" },
                { "key": "saint_kitts_and_nevis", "value": "Saint Kitts and Nevis" },
                { "key": "saint_lucia", "value": "Saint Lucia" },
                { "key": "saint_martin", "value": "Saint Martin" },
                { "key": "saint_pierre_and_miquelon", "value": "Saint Pierre and Miquelon" },
                { "key": "saint_vincent_and_the_grenadines", "value": "Saint Vincent and the Grenadines" },
                { "key": "samoa", "value": "Samoa" },
                { "key": "san_marino", "value": "San Marino" },
                { "key": "sao_tome_and_principe", "value": "Sao Tome and Principe" },
                { "key": "saudi_arabia", "value": "Saudi Arabia" },
                { "key": "senegal", "value": "Senegal" },
                { "key": "serbia", "value": "Serbia" },
                { "key": "seychelles", "value": "Seychelles" },
                { "key": "sierra_leone", "value": "Sierra Leone" },
                { "key": "singapore", "value": "Singapore" },
                { "key": "sint_maarten", "value": "Sint Maarten" },
                { "key": "slovakia", "value": "Slovakia" },
                { "key": "slovenia", "value": "Slovenia" },
                { "key": "solomon_islands", "value": "Solomon Islands" },
                { "key": "somalia", "value": "Somalia" },
                { "key": "south_africa", "value": "South Africa" },
                { "key": "south_georgia", "value": "South Georgia" },
                { "key": "south_sudan", "value": "South Sudan" },
                { "key": "spain", "value": "Spain" },
                { "key": "sri_lanka", "value": "Sri Lanka" },
                { "key": "sudan", "value": "Sudan" },
                { "key": "suriname", "value": "Suriname" },
                { "key": "svalbard_and_jan mayen", "value": "Svalbard and Jan Mayen" },
                { "key": "swaziland", "value": "Swaziland" },
                { "key": "sweden", "value": "Sweden" },
                { "key": "switzerland", "value": "Switzerland" },
                { "key": "syrian_arab_republic", "value": "Syrian Arab Republic" },
                { "key": "taiwan", "value": "Taiwan" },
                { "key": "tajikistan", "value": "Tajikistan" },
                { "key": "tanzania", "value": "Tanzania" },
                { "key": "thailand", "value": "Thailand" },
                { "key": "timor_leste", "value": "Timor Leste" },
                { "key": "togo", "value": "Togo" },
                { "key": "tokelau", "value": "Tokelau" },
                { "key": "tonga", "value": "Tonga" },
                { "key": "trinidad_and_tobago", "value": "Trinidad and Tobago" },
                { "key": "tunisia", "value": "Tunisia" },
                { "key": "turkey", "value": "Turkey" },
                { "key": "turkmenistan", "value": "Turkmenistan" },
                { "key": "turks_and_caicos islands", "value": "Turks and Caicos Islands" },
                { "key": "tuvalu", "value": "Tuvalu" },
                { "key": "uganda", "value": "Uganda" },
                { "key": "ukraine", "value": "Ukraine" },
                { "key": "united_arab_emirates", "value": "United Arab Emirates" },
                { "key": "united_kingdom", "value": "United Kingdom" },
                { "key": "united_states_of america", "value": "United States of America" },
                { "key": "uruguay", "value": "Uruguay" },
                { "key": "uzbekistan", "value": "Uzbekistan" },
                { "key": "vanuatu", "value": "Vanuatu" },
                { "key": "venezuela", "value": "Venezuela" },
                { "key": "viet_nam", "value": "Viet Nam" },
                { "key": "virgin_islands", "value": "Virgin Islands" },
                { "key": "virgin_islands", "value": "Virgin Islands" },
                { "key": "wallis_and_futuna", "value": "Wallis and Futuna" },
                { "key": "western_sahara", "value": "Western Sahara" },
                { "key": "yemen", "value": "Yemen" },
                { "key": "zambia", "value": "Zambia" },
                { "key": "zimbabwe", "value": "Zimbabwe" }
            ]
        }

        $scope.query = {
            title: "",
            content: "",
            category: "",
            categories: [
                { "title": "Technology" },
                { "title": "Work" },
                { "title": "Job" },
                { "title": "Personal" }
            ],
            priority: ""
        }

        $scope.rate = 7;
        $scope.max = 10;
        $scope.isReadonly = false;


        // star rating system hover to show span function
        $scope.hoveringOver = function(value) {
            $scope.overStar = value;
            $scope.query.priority = value;
            $scope.percent = 100 * (value / $scope.max);
        };
        $scope.index = 0;
        $scope.infor_active = false;
        $scope.query_active = true;
        $scope.confirm_active = true;
        $scope.confirmation_number = Math.floor(Math.random() * 10000000000) + 1000000000



        $scope.infor_submit = function() {
            $scope.query_active = false;
            $scope.index = 1;
            console.log($scope.information);


        }
        $scope.query_submit = function() {
            $scope.confirm_active = false;
            $scope.index = 2;
            console.log($scope.query);
        }

        $scope.information_valid = function() {
            return !($scope.information.firstname != '' && $scope.information.lastname != '' && $scope.information.email != '' && $scope.information.tel != '' && $scope.information.location != '');
        };

        $scope.query_valid = function() {
            return $scope.information_valid() || !($scope.query.title != '' && $scope.query.content != '' && $scope.query.category != '' && $scope.query.priority != '');
        };
    }






})();

// CONTACT CONTROLLER
// Description: Define the following functionalities:
// All the functionalities on the "Contact" section for the form
