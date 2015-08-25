/**
 * Created by David on 8/23/15.
 */

var MusicList = React.createClass({
    render: function(){
        var content = this.props.data.map(function(item){
           var play = function(){
               item.sound.play();
           };
           return (
               [
                   <div>
                       <p>{item.displayContent}</p>
                       <button onClick={play}>play</button>
                   </div>
               ]
           )
        });

        return (
            <div>
                {content}
            </div>
        );
    }
});
