/**
 * Created by David on 8/25/15.
 */
var LanguageSign = React.createClass({
    directive: function(){
        var currentLan = (window.navigator.language).toLowerCase();

        if(["en-us", "en"].indexOf(currentLan) > -1)
            return "en";
        if(["zh-cn", "zh"].indexOf(currentLan) > -1)
            return "cn";
        if(["ja", "ja-jp"].indexOf(currentLan) > -1)
            return "jp";

        return "unknown";
    },
    render: function(){
        var lan = this.directive();
        return <p>Your current language in usage is: <b>{lan}</b></p>
    }
});