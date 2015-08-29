/**
 * Created by David on 8/25/15.
 */
var soundDataList = [
    {
        urls: ['./music/javascript.mp3'],
        displayContent:"javascript"
    },
    {
        urls: ['./music/demonstrate.mp3'],
        displayContent:"demonstrate"
    }
];


React.render(
    <div>
        <LanguageSign />
        <MusicList data={soundDataList}/>
    </div>,
    document.getElementById('example')
);