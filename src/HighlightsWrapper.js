import React, {Component} from 'react';
import Highlight from './Highlight.js';
import './HighlightsWrapper.scss';
import $ from 'jquery';

var highlightsArr = [
    {
        name : 'Wyjątkowe wybrzeże',
        image : './img/highlight_cliffs.jpg',
        text : 'Wysokie kliffy, z których można skakać wprost do błękitnego i ciepłego morza',
        tagParty : false,
        tagActivities : true,
        tagSightseeing : true

    },
    {
        name : 'Hvar',
        image : './img/highlight_korcula.jpg',
        text : 'Niepowtarzalna wyspa i miasto, które całe wpisane jest na listę dziedzictwa UNESCO',
        tagParty : false,
        tagActivities : false,
        tagSightseeing : true
    },
    {
        name : 'Korcula',
        image : './img/highlight_korcula.jpg',
        text : 'Miejscu urodzenia Marco Polo i najbardziej słoneczna wyspa Chorwacji',
        tagParty : false,
        tagActivities : false,
        tagSightseeing : true
    },
    {
        name : 'Wzgórza Pakelni',
        image : './img/highlight_korcula.jpg',
        text : 'Najpiękniejszy zachód słońca w Chorwacji',
        tagParty : false,
        tagActivities : true,
        tagSightseeing : false
    },
    {
        name : 'Palmizana',
        image : './img/highlight_korcula.jpg',
        text : 'Przepiękna zatoka, idealna na leniwe śniadanie',
        tagParty : false,
        tagActivities : true,
        tagSightseeing : true
    },
    {
        name : 'Peka',
        image : './img/highlight_korcula.jpg',
        text : 'Ośmiornica lub mięso mieczone w specjalnym tradycyjnym naczyniu',
        tagParty : false,
        tagActivities : true,
        tagSightseeing : false
    },
    {
        name : 'Owoce morza',
        image : './img/highlight_korcula.jpg',
        text : 'Świeże i pyszn eowoce morza!',
        tagParty : false,
        tagActivities : true,
        tagSightseeing : false
    },
    {
        name : 'Snorkling',
        image : './img/highlight_korcula.jpg',
        text : 'Czysta woda, pozwala podziwiać dno i niezliczone gatunki kolorowych ryb',
        tagParty : false,
        tagActivities : true,
        tagSightseeing : false
    },
    {
        name : 'Trogir',
        image : './img/highlight_trogir.jpg',
        text : 'Stare miasto wpisane niemal w całości na listę Światowego Dziedzictwa UNESCO',
        tagParty : false,
        tagActivities : false,
        tagSightseeing : true
    },
    {
        name : 'White Party',
        image : './img/highlight_korcula.jpg',
        text : 'Przebierana impreza, gdzie wszyscy ubieramy się na biało!',
        tagParty : true,
        tagActivities : false,
        tagSightseeing : false
    },
    {
        name : 'Pływanie we flocie',
        image : './img/highlight_korcula.jpg',
        text : 'Flota jachtów, wspólne przerwy i noclegi - niezapomniane przeżycie',
        tagParty : false,
        tagActivities : true,
        tagSightseeing : false
    },

];



class HighlightsWrapper extends Component {

    constructor(props){
        super(props);
        this.scroll = this.scroll.bind(this);
        this.state = {
            tag : "all",
        }
    }



    scroll(direction){
        let far = $( '.image-container' ).width()/1*direction;
        let pos = $('.image-container').scrollLeft() + far;
        $('.image-container').animate( { scrollLeft: pos }, 1000)
    }

 

    handleAll = () => {
        this.setState({tag : 'all'});
    };


    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(this.state.tag)
    };

    render () {
      
         if (this.state.tag === 'all') {


            return (
                <div id="highlightsContainer">
                <div class="highlightsTextBox">
                    <h2>Doświadczaj więcej</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. </p>
                </div>
            
                <div className='main' id="main">
                   
                    <div className='wrapper'>
                        <div className='blockLeft'></div>
                        <div className="prev" onClick={this.scroll.bind(null, -1)}>&#10094;</div>
                        <div className="image-container">
                            {highlightsArr.map((el) =>
                                <Highlight name={el.name} image={el.image} info={el.text}/>
                            )}

                        </div>
                        <div className="next" onClick={this.scroll.bind(null, 1)}>&#10095;</div>
                        <div className='blockRight'></div>
                    </div>

                </div>
                </div>
            )
        }
    }
}

export default HighlightsWrapper;
