/**
 * Created by David on 8/25/15.
 */
var soundDataList = [
    {
        sound: new Howl({
            urls: ['./music/javascript.mp3']
        }),
        displayContent:"javascript"
    },
    {
        sound: new Howl({
            urls: ['./music/demonstrate.mp3']
        }),
        displayContent:"demonstrate"
    }
];

React.render(
    <MusicList data={soundDataList}/>,
    document.getElementById('sounderExample')
);

React.render(
    <LanguageSign />,
    document.getElementById('lanExample')
);
