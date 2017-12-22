let process = {
	menu:function(){
		let content = <div>
		<div className="navbar">
              <div className="navbar-inner">
                <div className="center">COOKING TUTORIAL</div>
              </div>
            </div>
		
			<ul>
				<li><a href='#' onClick={process.page1}> CHICKEN ADOBO</a></li>
				<li><a href='#' onClick={process.page2}> CHICKEN BARBEQUE</a></li>
				<li><a href='#' onClick={process.page3}> SINIGANG NA ISDA</a></li>
				<li><a href='#' onClick={process.page4}> KARI-KARI</a></li>
				<li><a href='#' onClick={process.page5}> LECHON MANOK</a></li>
				<li><a href='#' onClick={process.page6}> PINAKBET</a></li>
				<li><a href='#' onClick={process.page7}> Chopsuey</a></li>
				<li><a href='#' onClick={process.page8}> MONGO BEANS</a></li>
				<li><a href='#' onClick={process.page9}> FRUIT SALAD</a></li>
				<li><a href='#' onClick={process.page10}> CUPCAKE</a></li>

				
			</ul>
		</div>;
		ReactDOM.render(content,document.getElementById('root'));
	},
	page1:function(){
		let content = <div>
				
	<img src='img/ado.gif' width='100%' /><a href='#' className='btn-back' onClick={process.menu}><b>Back</b></a>
	<br/>CHICKEN ADOBO<b></b> <br/>
	8 whole chicken legs (about 4 pounds), cut into drumstick and thigh sections.
1 1/2 cups distilled white vinegar.
3 garlic cloves, crushed.
2 bay leaves.
1/2 tablespoon whole black peppercorns, crushed lightly.
3/4 cup soy sauce.
3 tablespoons vegetable oil.
cooked rice as an accompaniment.
			
			</div>;
			ReactDOM.render(content,document.getElementById('root'));

	},
	page2:function(){
			let content = <div>
				<img src='img/bbq.gif' width='100%' /><a href='#' className='btn-back' onClick={process.menu}><b>Back</b></a>
				 <br/><b>CHICKEN BARBEQUE</b><br/>
	2 tablespoons vegetable oil.
¼ cup tomato paste.
2 teaspoons garlic powder.
2 teaspoons onion powder.
1 teaspoon smoked paprika.
½ teaspoon cayenne pepper.
½ teaspoon freshly ground black pepper.
½ cup apple cider vinegar.	
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	
		
	},
	page3:function(){
		let content = <div>

			<img src='img/bangus.gif' width='100%' /><a href='#' className='btn-back' onClick={process.menu}><b>Back</b></a>
		<br/><b>SINIGANG NA ISDA</b>
	1 piece large Milkfish (bangus), cleaned and sliced into serving pieces.
2 pieces tomatoes, quartered.
2 cups kangkong leaves or Chinese cabbage (bokchoy), cut into serving size.
1 small white radish (labanos), sliced.
1 tbsp fish sauce.
1 medium onion, sliced.
5 cups water.
1 small pack tamarind powder.
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		
	},
	page4:function(){
		let content = <div>
				
				<img src='img/kari.gif' width='100%' /><a href='#' className='btn-back' onClick={process.menu}><b>Back</b></a>
			<br/><b>KARI-KARI</b><br/>
			2 1⁄2 lbs pork hocks or 2 1⁄2 lbs oxtails, cut into 2" lengths.
1⁄2 lb stewing beef, to make a meatier dish (optional)
1 1⁄2 teaspoons salt.
2 tablespoons cooking oil.
2 cloves garlic, minced.
1 medium onion, sliced.
1⁄2 cup achute water (optional)
3 tablespoons peanut butter.
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},

	page5:function(){
		let content = <div>
				
				<img src='img/lec.gif' width='100%' /><a href='#' className='btn-back' onClick={process.menu}><b>Back</b></a>
			<br/><b>LECHON MANOK</b><br/>
			1 whole chicken.
1 onion, chopped.
15 cloves garlic, minced.
1/4 cup fish sauce (patis)
4 tablespoon calamansi juice.
1 teaspoon salt.
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	
	},

	page6:function(){
		let content = <div>
				
	<img src='img/ado.gif' width='100%' /><a href='#' className='btn-back' onClick={process.menu}><b>Back</b></a>
	<br/>PINAKBET<b></b> <br/>
	2 medium-length eggplants, cubed
1 medium-length bitter melon (ampalaya), sliced
6 tender okra pods
1 garlic clove, minced
1/2 cup of sliced onions
1/2 cup chopped tomatoes
1 cup water from rinsing rice
3 tbsp fermented sauce (less if it’s a salty bagoong)
1 tbsp pounded ginger
1 cup boiled sliced pork
2 tbsp cooking oil
			
			</div>;
			ReactDOM.render(content,document.getElementById('root'));

	},

	page7:function(){
		let content = <div>
				
	<img src='img/ado.gif' width='100%' /><a href='#' className='btn-back' onClick={process.menu}><b>Back</b></a>
	<br/>Chopsuey<b></b> <br/>
	¼ lb shrimp
½ lb boneless chicken
1 tsp garlic
2 tsp cornstarch
1 tbsp oyster sauce
½ piece cabbage, quartered
1 cup green bell pepper,sliced
1 cup red bell pepper, sliced
1 small cauliflower, cut into small pieces
1 ½ cup snow peas
1 cup carrots, sliced
1 cup onion, diced
1 cup chicken liver, sliced
Shrimp juice (derived by crushing the head of the shrimp) or use shrimp bouillon
1¼ cup water
salt and pepper
			
			</div>;
			ReactDOM.render(content,document.getElementById('root'));

	},

	page8:function(){
		let content = <div>
				
	<img src='img/ado.gif' width='100%' /><a href='#' className='btn-back' onClick={process.menu}><b>Back</b></a>
	<br/>MONGO BEANS<b></b> <br/>
	1 cup dried mung beans
7 cups water
1 tablespoon vegetable oil
1 onion, peeled and sliced thinly
3 cloves garlic, peeled and minced
1 large tomato, chopped
2 cups chicharon (pork cracklings with attached meat)
1 bunch fresh spinach, stems trimmed
1 tablespoon fish sauce
			
			</div>;
			ReactDOM.render(content,document.getElementById('root'));

	},

	page9:function(){
		let content = <div>
				
	<img src='img/ado.gif' width='100%' /><a href='#' className='btn-back' onClick={process.menu}><b>Back</b></a>
	<br/>FRUIT SALAD<b></b> <br/>
	1 1⁄2 cups heavy cream.
1 (8 ounce) package cream cheese.
3 (14 ounce) cans fruit cocktail, drained.
1 (14 ounce) can pineapple chunks, drained.
1 (14 ounce) can lychees, drained.
1 cup coconut.
1 (8 ounce) packageunsalted chopped almonds (optional)
1 1⁄2 cups cubed apples (optional)
			
			</div>;
			ReactDOM.render(content,document.getElementById('root'));

	},

	page10:function(){
		let content = <div>
				
	<img src='img/ado.gif' width='100%' /><a href='#' className='btn-back' onClick={process.menu}><b>Back</b></a>
	<br/>CUPCAKE<b></b> <br/>
	2 cups flour.
1⁄2 teaspoon salt.
2 teaspoons baking powder.
1⁄2 cup butter, softened.
⁄4 cup sugar (if you like your cupcakes very sweet, add a little more.)
2 eggs.
1 cup milk.
1 teaspoon vanilla essence (optional)
			
			</div>;
			ReactDOM.render(content,document.getElementById('root'));

    },



	loading:function(){
		let content = <div>
					

					<div align='center'>
						<img src='img/una.gif' width='100%'/>
					</div>
				</div>;
		ReactDOM.render(content,document.getElementById('root'));
		
	},
	
}
process.loading();
setTimeout(function(){
	process.menu();
},1000);