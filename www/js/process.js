let process = {
	menu:function(){
		let content = <div>
		<audio id="audio_ticking">
				<source src="audio/ticking.mp3" type="audio/mp3" />
			</audio>
			<div className="navbar">
              <div className="navbar-inner">
                <div className="center"><center>THE LEAGUE OF LEGENDS CHAMPIONS</center></div>
              </div>
            </div>
			<ul>
				<li><a href='#' onClick={process.page1}><img src='img/amg.jpg' width='30%' /> LUCIAN</a></li>
				<li><a href='#' onClick={process.page2}><img src='img/amg.jpg' width='30%' /> TEEMO</a></li>
				<li><a href='#' onClick={process.page3}><img src='img/amg.jpg' width='30%' /> VI</a></li>
				<li><a href='#' onClick={process.page4}><img src='img/amg.jpg' width='30%' /> WARWICK</a></li>
				<li><a href='#' onClick={process.page5}><img src='img/amg.jpg' width='30%' /> MAOKAI</a></li>
				<li><a href='#' onClick={process.page6}><img src='img/amg.jpg' width='30%' /> LEE SIN</a></li>
				<li><a href='#' onClick={process.page7}><img src='img/amg.jpg' width='30%' /> TALIYAH</a></li>
				<li><a href='#' onClick={process.page8}><img src='img/amg.jpg' width='30%' /> CAITLYN</a></li>
				<li><a href='#' onClick={process.page9}><img src='img/amg.jpg' width='30%' /> AHRI</a></li>
				<li><a href='#' onClick={process.page10}><img src='img/amg.jpg' width='30%' /> TARIC</a></li>
				<li><a href='#' onClick={process.page11}><img src='img/amg.jpg' width='30%' /> ZED</a></li>
				<li><a href='#' onClick={process.page12}><img src='img/amg.jpg' width='30%' /> KATARINA</a></li>
				<li><a href='#' onClick={process.page13}><img src='img/amg.jpg' width='30%' /> YASOU</a></li>
				<li><a href='#' onClick={process.page14}><img src='img/amg.jpg' width='30%' /> YI</a></li>
				<li><a href='#' onClick={process.page15}><img src='img/amg.jpg' width='30%' /> GAREN</a></li>
				
			</ul>
		</div>;
		ReactDOM.render(content,document.getElementById('root'));
	},
	page1:function(){
		let content = <div>
				<audio id="audio_ticking">
					<source src="audio/ticking.mp3" type="audio/mp3" />
				</audio>
				<img src='img/lucian.gif' height='100%' width='100%' />
				"Be grateful. By slaying you now, I spare you an eternity of torment." - LucianSquare Lucian
Once a Sentinel of Light, Lucian is a grim hunter of undying spirits, pursuing them relentlessly and annihilating them with his twin relic pistols. Consumed by the need to avenge his dead wife, he will not rest until Thresh, the specter who holds her soul, is destroyed. Merciless and single-minded, Lucian allows nothing to stand in the path of this vengeance—anyone or anything foolish enough to try is blown away by an overwhelming barrage of magical gunfire.<br/><a href='#' className='btn-back' onClick={process.menu}>back</a>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_ticking').play();
		// process.audio('audio_ticking').pause();

var setTimer = 0;
function clock(){
	let timer = <h1>{new Date().toLocaleTimeString()}</h1>;
	ReactDOM.render(timer,document.getElementById('timer'));	

	setTimer = setTimeout(function(){
		clock();
	},5000);
};

function stopClock(){
	clearInterval(setTimer);
}

let btn = <div>
				<div id='timer' className='text'></div>
				<div id='execute' className='text'></div>
				<div id='output' className='text'></div>
				<div id='error' className='text'></div>
				<div id='commands' className='text'></div>
				<div id='dbfile' className='text'></div>
				<div id='savedb' className='text'></div>
				<button onClick={clock}>Start Clock</button>
				<button onClick={stopClock}>Stop Clock</button>
			</div>;



	},
	page2:function(){
		let content = <div>
				<audio id="audio_ticking">
					<source src="audio/ticking.mp3" type="audio/mp3" />
				</audio>
				<img src='img/teemo.gif' height='100%' width='100%' />
				"TeemoSquare Teemo rides a thin line between chipper compatriot and unrepentant killer, but there's no one else I'd rather have as a friend. - TristanaSquare Tristana
Undeterred by even the most dangerous and threatening of obstacles, Teemo scouts the world with boundless enthusiasm and a cheerful spirit. A yordle with an unwavering sense of morality, he takes pride in following the Bandle Scout's Code, sometimes with such eagerness that he is unaware of the broader consequences of his actions. Though some say the existence of the Scouts is questionable, one thing is for certain: Teemo's conviction is nothing to be trifled with.<br/><a href='#' className='btn-back' onClick={process.menu}>back</a>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_ticking').play();
		// process.audio('audio_ticking').pause();
	},
	page3:function(){
		let content = <div>
				<audio id="audio_ticking">
					<source src="audio/ticking.mp3" type="audio/mp3" />
				</audio>
				<img src='img/vi.gif' width='100%%' />
				"Do you want a punch to the face or the gut? Wait, I got two fists, it can be both!" - ViSquare Vi
Once a criminal from the mean streets of Zaun, Vi is a hotheaded, impulsive, and fearsome woman with only a very loose respect for authority figures. Growing up all but alone, Vi developed finely honed survival instincts as well as a wickedly abrasive sense of humor. Now working with the Wardens of Piltover to keep the peace, she wields mighty hextech Excessive Force gauntlets that can punch through walls and suspects with equal ease.<br/><a href='#' className='btn-back' onClick={process.menu}>back</a>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_ticking').play();
		// process.audio('audio_ticking').pause();
	},
	page4:function(){
		let content = <div>
				<audio id="audio_ticking">
					<source src="audio/ticking.mp3" type="audio/mp3" />
				</audio>
				<img src='img/warwick.gif' height='100%' width='100%' />
				"Spill blood... draw the beast!" - WarwickSquare Warwick
Warwick is a monster who hunts the gray alleys of Zaun. Transformed by agonizing experiments, his body is fused with an intricate system of chambers and pumps, machinery filling his veins with alchemical rage. Bursting out of the shadows, he preys upon those criminals who terrorize the city's depths. Warwick is drawn to blood, and driven mad by its Blood Hunt scent. None who spill it can escape him.<br/><a href='#' className='btn-back' onClick={process.menu}>BACK</a>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_ticking').play();
		// process.audio('audio_ticking').pause();
	},
	page5:function(){
		let content = <div>
				<audio id="audio_ticking">
					<source src="audio/ticking.mp3" type="audio/mp3" />
				</audio>
				<img src='img/maokai.gif' height='100%' width='100%' />
				"All around me are empty husks, soulless and unafraid... but I will bring them fear." - MaokaiSquare Maokai
Maokai is a rageful, towering treant who fights the unnatural horrors of the Shadow Isles. He was twisted into a force of vengeance after a Blade of the Ruined King item magical cataclysm destroyed his home, surviving undeath only through the waters of life infused within his heartwood. Once a peaceful nature spirit, Maokai now furiously battles to banish the scourge of unlife from the Shadow Isles and restore his home to its former beauty.<br/><a href='#' className='btn-back' onClick={process.menu}>back</a>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_ticking').play();
		// process.audio('audio_ticking').pause();
	},
	page6:function(){
		let content = <div>
				<audio id="audio_ticking">
					<source src="audio/ticking.mp3" type="audio/mp3" />
				</audio>
				<img src='img/leesin.gif' height='100%' width='100%' />
				"The actions of one may sunder the world, but the efforts of many may rebuild it." - Lee SinSquare Lee Sin
A master of Ionia's ancient martial arts, Lee Sin is a principled fighter who channels the essence of the dragon spirit to face any challenge. Though he lost his sight many years ago, the warrior-monk has devoted his life to protecting his homeland against any who would dare upset its sacred balance. Enemies who underestimate his meditative demeanor will endure his fabled burning fists and blazing roundhouse kicks.<br/><a href='#' className='btn-back' onClick={process.menu}>back</a>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_ticking').play();
		// process.audio('audio_ticking').pause();
	},
	page7:function(){
		let content = <div>
				<audio id="audio_ticking">
					<source src="audio/ticking.mp3" type="audio/mp3" />
				</audio>
				<img src='img/taliyah.gif' height='100%' width='100%' />
				"This world is a tapestry of our own making." - TaliyahSquare Taliyah
Taliyah is a nomadic mage from Shurima, torn between teenage wonder and adult responsibility. She has crossed nearly all of Valoran on a journey to learn the true nature of her growing powers, though more recently she has returned to protect her tribe. Some have mistaken her compassion for weakness and paid the ultimate price—for beneath Taliyah's youthful demeanor is a will strong enough to move mountains, and a spirit fierce enough to make the earth itself tremble.<br/><a href='#' className='btn-back' onClick={process.menu}>back</a>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_ticking').play();
		// process.audio('audio_ticking').pause();
	},
	page8:function(){
		let content = <div>
				<audio id="audio_ticking">
					<source src="audio/ticking.mp3" type="audio/mp3" />
				</audio>
				<img src='img/caitlyn.gif' height='100%' width='100%' />
				"To be the best hunter, you have to be able to think like your prey." -  CaitlynSquare Caitlyn
Renowned as its finest peacekeeper, Caitlyn is also Piltover's best shot at ridding the city of its elusive criminal elements. She is often paired with Vi, acting as a cool counterpoint to her partner's more impetuous nature. Even though she carries a one-of-a-kind hextech rifle, Caitlyn's most powerful weapon is her superior intellect, allowing her to lay elaborate traps for any lawbreakers foolish enough to operate in the City of Progress.<br/><a href='#' className='btn-back' onClick={process.menu}>back</a>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_ticking').play();
		// process.audio('audio_ticking').pause();
	},
	page9:function(){
		let content = <div>
				<audio id="audio_ticking">
					<source src="audio/ticking.mp3" type="audio/mp3" />
				</audio>
				<img src='img/ahri.gif' height='100%' width='100%' />
				"Human emotions can be more volatile than even the deepest magic." - AhriSquare Ahri
Innately connected to the latent power of Runeterra, Ahri is a vastaya who can reshape magic into Orb of Deception orbs of raw energy. She revels in toying with her prey by manipulating their emotions before devouring their Essence Theft life essence. Despite her predatory nature, Ahri retains a sense of empathy as she receives flashes of memory from each soul she consumes.<br/><a href='#' className='btn-back' onClick={process.menu}>back</a>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_ticking').play();
		// process.audio('audio_ticking').pause();
	},
	page10:function(){
		let content = <div>
				<audio id="audio_ticking">
					<source src="audio/ticking.mp3" type="audio/mp3" />
				</audio>
				<img src='img/taric.gif' height='100%' width='100%' />
				"The best weapons are beautiful." - TaricSquare Taric
Taric is the Aspect of the Protector, wielding incredible power as Runeterra's guardian of life, love, and beauty. Shamed by a dereliction of duty and exiled from his homeland Demacia, Taric ascended Mount Targon to find redemption, only to discover a higher calling among the stars. Imbued with the might of ancient Targon, the Shield of Valoran now stands ever vigilant against the insidious corruption of the Void.<br/><a href='#' className='btn-back' onClick={process.menu}>back</a>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_ticking').play();
		// process.audio('audio_ticking').pause();
	},
	page11:function(){
		let content = <div>
				<audio id="audio_ticking">
					<source src="audio/ticking.mp3" type="audio/mp3" />
				</audio>
				<img src='img/zed.gif' height='100%' width='100%' />
				"Balance is a lie - we are the true ninjas." - ZedSquare Zed
Utterly ruthless and without mercy, Zed is the leader of the Order of Shadow, an organization he created with the intent of militarizing Ionia's martial arts traditions to drive out Noxian invaders. During the war, desperation led him to unlock the secret shadow form—a malevolent spirit magic as dangerous and corrupting as it is powerful. Zed has mastered all of these forbidden techniques to destroy anything he sees as a threat to his nation, or his new order.<br/><a href='#' className='btn-back' onClick={process.menu}>back</a>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_ticking').play();
		// process.audio('audio_ticking').pause();
	},
	page12:function(){
		let content = <div>
				<audio id="audio_ticking">
					<source src="audio/ticking.mp3" type="audio/mp3" />
				</audio>
				<img src='img/katarina.jpg' height='100%' width='100%' />
				"Balance is a lie - we are the true ninjas." - ZedSquare Zed
Utterly ruthless and without mercy, Zed is the leader of the Order of Shadow, an organization he created with the intent of militarizing Ionia's martial arts traditions to drive out Noxian invaders. During the war, desperation led him to unlock the secret shadow form—a malevolent spirit magic as dangerous and corrupting as it is powerful. Zed has mastered all of these forbidden techniques to destroy anything he sees as a threat to his nation, or his new order.<br/><a href='#' className='btn-back' onClick={process.menu}>back</a>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_ticking').play();
		// process.audio('audio_ticking').pause();
	},
	page13:function(){
		let content = <div>
				<audio id="audio_ticking">
					<source src="audio/ticking.mp3" type="audio/mp3" />
				</audio>
				<img src='img/yasou.jpg' height='100%' width='100%' />
			    "The story of a sword is inked in blood." - YasuoSquare Yasuo
An Ionian of deep resolve, Yasuo is an agile swordsman, trained to wield the air itself against his enemies. As a young man, pride led him down a path of loss, costing him his position, his mentor, and ultimately his own brother. Disgraced by false accusations and now hunted as little more than a criminal, Yasuo wanders his homeland seeking redemption for his past, with only the wind to guide his blade.<br/><a href='#' className='btn-back' onClick={process.menu}>back</a>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_ticking').play();
		// process.audio('audio_ticking').pause();
	},
	page14:function(){
		let content = <div>
				<audio id="audio_ticking">
					<source src="audio/ticking.mp3" type="audio/mp3" />
				</audio>
				<img src='img/yi.jpg' height='100%' width='100%' />
				"These isles... how they scream." - YorickSquare Yorick
The last survivor of a long-forgotten religious order, Yorick is both blessed and cursed with power over the dead. Trapped on the Shadow Isles, his only companions are the rotting Shepherd of Souls corpses and shrieking Eulogy of the Isles spirits that he gathers to him. Yorick's monstrous actions belie his noble purpose: to free his home from the curse of the Blade of the Ruined King item Ruination.<br/><a href='#' className='btn-back' onClick={process.menu}>back</a>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_ticking').play();
		// process.audio('audio_ticking').pause();
	},
	page15:function(){
		let content = <div>
				<audio id="audio_ticking">
					<source src="audio/ticking.mp3" type="audio/mp3" />
				</audio>
				<img src='img/garen.jpg' height='100%' width='100%' />
				"This kingdom, and its people, have given me everything. What kind of man would I be if I gave any less in return?" - GarenSquare Garen
A proud and noble warrior, Garen fights as one of the Dauntless Vanguard. He is popular among his fellows, and respected well enough by his enemies—not least as a scion of the prestigious Crownguard family, entrusted with defending Demacia and its ideals. Clad in magic-resistant armor and bearing a mighty broadsword, Garen stands ready to confront mages and sorcerers on the field of battle, in a veritable whirlwind of righteous steel.<br/><a href='#' className='btn-back' onClick={process.menu}>back</a>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_ticking').play();
		// process.audio('audio_ticking').pause();
	},	
	loading:function(){
		let content = <div>
					<div className="progressbar-infinite"></div>
					<audio id="audio">
						<source src="audio/legend.mp3" type="audio/mp3" />
					</audio>
					<div align='center'>
						<img src='img/lol.jpg' width='100%' />
						Loading...
					</div>
				</div>;
		ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio').play();
		process.replayAudio('audio');
	},
	audio:function(audio){
		let _audio = document.getElementById(audio);
		return _audio;
	},
	replayAudio:function(audio){
		process.audio(audio).addEventListener('ended',function(){
			process.audio('audio').pause();
			process.audio(audio).play();
		})
	}
}

let counting = 0;
process.loading();
setTimeout(function(){
	process.audio('audio').pause();
	process.menu();
a},8000);