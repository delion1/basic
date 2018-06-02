//    var FetchTweets = require('/node_modules/fetch-tweets/lib/fetch-tweets.js');

jQuery.noConflict();
jQuery(function($) {
    
$.getScript( 'node_modules/fetch-tweets/lib/fetch-tweets.js' )
  .done(function( script, textStatus ) {
    console.log( textStatus );
    var apiKeys = {
        consumer_key: 'gjPYD19cCjdAHksJHBBCMPkSC',
        consumer_secret:'d4GlnEhzKvT1FpvNdAPN6PludDxurW6XGUElDk1ryxBWU29tML',
    };
    var fetchTweets = new FetchTweets(apiKeys);
    
    fetchTweets.byTopic('JavaScript', function(results){
       console.log(results); // Do whatever with the results
    });
    
  });
});