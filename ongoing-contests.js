const url="https://contesttrackerapi.herokuapp.com/";
const image =document.querySelectorAll(".img-fluid");
//const date = document.getElementsByClassName("actual-date");
const platformhead=document.getElementsByClassName("platform-name");
const link=document.querySelectorAll(".visit-btn");
const duration=document.querySelectorAll(".actual-duration");
function urlfetch(platform){
    let logourl=" ";
    if(platform==="HACKEREARTH"){
        logourl="data:image/png;base64,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";
    }
    else if(platform=="CODEFORCES"){
        logourl="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSYb9t0kzwxZFio76tCfgUNNrMt-aBG107b8AiYh_cxztvA2Kq7&usqp=CAU";
    }
    else if(platform=="CODECHEF"){
        logourl="data:image/jpeg;base64,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";
    }
    else if(platform=="HACKERRANK"){
        logourl="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMHBhMQBxATFRUWGREaFRUYFxAVGhgSGBMdFhoZFhYYHTQhGBolHRcYITMjJTErMjouFyAzODMtOCotOisBCgoKDg0OGhAQGy0lHiItNi0wLy0tLS4tLy0tLjctLS0zLS0tLS8tLS0tLy0tLS0tLS8tLS0tLS0vKy0tLS0tK//AABEIAOEA4QMBEQACEQEDEQH/xAAbAAEAAwADAQAAAAAAAAAAAAAABQYHAQMEAv/EAEgQAAIBAgIFBA8ECAUFAAAAAAABAgMRBAUGEiExYUFRcZEHEzI1NkJScnOBobGys8EiYoOSFCNTVGPC0fAVJDSC8RYXJjND/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAMEBQYCAf/EADQRAQACAQEFBQcEAgIDAAAAAAABAgMRBAUhMTISQVFxsSI0gZGhwdEzYeHwFFITFSNC8f/aAAwDAQACEQMRAD8A3EAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAdWIxMMLT1sTOMFzyaiutnyZiObxfJWka2mIj93zhcZTxibwtSE7b9WUZW6bbhFonk+Y8tMnRaJ8pd59SAAAAAAAAAAAAAAAAAAAAAAAAAAAAPLmGY0supa2MqKPMuV9EVtZ5taK80WbPjxRredFRzTTSdS8cshqLy5WcvVHcvXcr2zz/6sbPva08MUafvPP5f/AFV8TiJ4qrr4mcpS522+rmXArzMzzZV72vPatOsvmlUlRqKVGTi1uabTXQ0InR8raazrE6SsmV6ZVcPaOPj2yPOrRmvpL2dJPXPMc2ng3rkpwyR2o+v4n6ea35ZnFHM4/wCUmm+WL2SXTF+9bCxW9bcmzg2rFmj2J+He957WAAAAAAAAAAAAAAAAAAAAAAAB0YzGQwVFzxc1GPO/clyvgj5NoiNZR5MtMde1edIU7N9M5VLxyqOqv2kkm/8AbHcvXfoRWvn/ANWNtG9bTwxRp+88/l+fkqtarKvVcq8nKT3ttt9bK8zrzZFrWtPatOsvg+PgAAAcxk4STg2mtzTaafBrcfSNYnWFlyjTGphbRzBdsj5WxTX0l67dJPTPMc2ps+9MlOGT2o+v8/3iumXZlSzKjrYOalzrc10p7UWa2i3Jt4c+PNGtJ1es9JgAAAAAAAAAAAAAAAAAAcN2W0Cr53phDC3hltqkvK8RdFu79WziQXzxHCGVtO9K09nFxnx7v5/vFScbjamPr6+Mm5S48i5ktyXQVbWm3GWHly3y27V51l0HlGAAAAAAAAdmHryw1ZTw8nGS3NOz/wCOB9iZjjD1S9qW7VZ0lcck0zUrQzdWf7RLZ/uit3StnBFmmfus2tm3rE+zm+f5j+/Bb6dRVaalSaae1NNNNcGizrq2ImJjWOT6D6AAAAAAAAAAAAAAAeHNs2pZTQ1sXLf3MVtlLoX13Hm14rHFBn2nHgrrefh3yz7PNI6ubNxf2KfkJ7199+N0binfLNvJz21bdkz8OVfD8+PohiJSAAAAAAAAAAAAAksnzurlFT/LO8eWm76r6PJfFeu5JTJavJZ2fa8mCfZ5eHd/DQckz6lnFP8AUvVmu6pu11xXlLivYW6ZIs6LZtsx549nn4JUkWgAAAAAAAAAAAAK3pNpQsrk6WESlVsrt9zC+1X53bbb+3Dky9nhHNm7bvCMM9inG30j++DP8TiZ4uu54mTlJ72/72LginMzM6y5697Xt2rTrLqPjyAAO/B4WeOxKp4WLlJ7lw5W3yJc56rWZnSHvHjtktFKRrMrhX0HSyz9TUbrLa2+4b8m3IuJYnZ+H7tm26Y/4vZn2/p5KXWpSw9ZwrxcZRdmnvTK0xpwli2rNZmto0mHwfHkAAAAAAAA+qdR0qilSbTW1NNpp8Gtx9jg+xMxOsc140a0t/SakaOZ927KNTYlJ8ikuST51sfDltY82vCzc2LeXbmMeXn3T4+f7reWGwAAAAAAAAAAADHMfW/SMdUm3fWnN9cmzOtOszLjstu1ktbxmXQfEYAA78DhZY7GQpULa0nZX2Lnu/UfaxrOkJMWOcl4pXnLUMiyWnk2G1aW2Ttrze+T+keZF6lIpDp9l2Wmz10jn3z/AHuSZ7WkLpHo/DOaN42jVS+zPnXky517uu8eTHF4/dS2zYq5415W8ftP94MxrU3RrShU3xcovpTs/aijMacHMWrNZmJ7uD5D4ksiyiWdYp06MlG0dZt3fLbYl0nulJvOizsuzW2i01idNE7/ANB1P3iH5Zf1Jf8AHnxX/wDp7/7x8v5eLONEp5Xl8q0qsZKOrdJNOzko7NvO0eb4ZrGuqDaN3Xw45v2onRXSFnAAAAvbuQNkwdXt+EhPyoxfWrmjE6xq7LHbtVi3jDuPr2AAAAAAAAAOuvPtVCUuZN9SufJ5Plp0iZYvDuUZzio5OQ+gADmM3CScG01tTTaafOmtwfYnTjDRtA688Rk8niJym+2SV5SlJ21I7Lt7i5gmZrxdFuu1rYZm0zPHvnXuhZCZpKl2QcTPDUKP6PUnC7nfVlKN9i32e0r55mNNGTvW9q1r2ZmOPdOig3vvKrAALX2Ou+lX0f8AOifZ+qWtuj9S3l92gFtvoXTPwarfh/MiRZuiVLePu1vh6wy4pOXAAAABrOjc9fIMO/4dNdUbfQv4+mHWbHOuz08oSR7WQAAAAAAAAB4s7n2rJa8lyUqr6oM836ZQbTbs4bz4RPoyAz3JAAAAA0Tsd95J+ln8EC3s/S6HdP6M+f2haCdpqZ2SP/RQ86p7kVto7mPvfpp5yoxWYYBbOxz30q+j/nRPs/VLV3R+pby+7QC230Jpn4NVvw/mxIs3RKlvD3a3w9YZcUnMAAAAA1HQufbNGqLf8RdVSS+hew9EOn3dbXZq/H6TKbJF0AAAAAAAAARmkzto9iPR1PbGx4ydMq22e738p9GSlBygAAAANE7HfeSfpZ/BAt7P0uh3T+jPn9oWknaam9keLlQoaqb+1U3XfIivtHcyN7xM1pp4yo3a5eTLqZV0YfZt4Ha5eTLqY0OzbwWzsdRcc0q6ya/V8qa8dE+z9UtXdMTGS2vgv5bbyE008Ga34fzYkWbolS3h7tb4esMtKTmAAAAAaboI76Nw4Sq/Mb+pdw9DpN2e7R5z6rAStAAAAAAAAAARWlTto7X8xnjJ0Sq7b7vfyZKUHKgAAAA0bsdd45+ln8EC3s/S6HdP6M+f2haSdpgAAAAAQmmvgzW/D+bEizdEqW8PdrfD1hlZScwAAAADTNAX/wCOrz6nxFzB0Ok3Z7vHnPqsZM0AAAAAAAAABE6V+DlfzGeMvRKrtvu9/JkpQcqAAAADRuxz3jn6WfwQLez9Lod0/oz5/aFqJ2mAAAAABB6a+DFb8P5sSLN0Spbw92t8PWGVlJzAAAAANM0A8HV59T3lzB0Ok3X7vHnPqshM0AAAAAAAAABF6UK+juI9HP2K54ydMq22+738pZFcoOULgLgLgLgaP2OO8c/Sz+CBb2fpdDun9GfP7QtRO01S7IOOqYKjReDqThdzvqtq9kt9iDPaY00Ze9Mt8da9idFL/wAexP7zV/PIrf8AJbxY/wDl5/8Aefmf49if3mr+eQ/5LeJ/l5/95+a0aA5lWxuZVI4urOaULpSk3Z6y2k+C0zPGWluzNkyZLRe0zwXkstpB6beDFb8P5sSLN0Spbw92t8PWGVXKTmC4C4C4C4Gn6Aq2jUOMqvxtfQu4eh0m7Pd4859ViJWgAAAAAAAAAPBn8O2ZFiEuWlWt06jPN+mUG1RrgvH7T6McuZ7kgAAAAaP2OO8U/Sz+CBb2fpdDun9GfP7QtZO01J7Jv+noedU9yK20coY+9+mnmoZWYYBbuxr31q+j/nRPs/VLW3T+pbyaIW28g9NvBit+H82JFm6JUt4e72+HrDKSk5gAAAAGqaDx1NF6N+Xtr66sn7i7h6IdNu6NNmr8fWU8SrwAAAAAAAAA6sXT7bhZx54yXWrHyeMPN41rMMPg7xRnOMjk5D6AAAGk9jfvFP0s/ggW9n6XQ7q/Rnz+0LWTtNSeyb/p6HnVPcittHKGPvfpp5qCVmGAW/saSvm1Wz/+f86J9n6pau6J/wDJby+7RS230Fpw7aL1r/w/mxIs3RKlvH3a3w9YZQndbCk5jUAAAAGv6Kw7Xo5h1z04P8y1vqX8fTDq9ijTZ6eUJU9rIAAAAAAAAAAYfi6X6Pi5w8mU4/lk19DNmNJ0cdevZtNfCZj5OoPIAAAWjRXSqOSYGVKvSlK83JOLjyxSs0/N9pNiyxWNJaOx7dXBSa2rM8deCa/7h0v3er10/wCpJ/kR4Lf/AG+P/Wfp+Vf0s0kjn0aao05QUNZvWabbdlst0EWXJ29NFLbdsjaOzERpp4q6RKDh7UHyWr6KZ/SzbCqEEoVIJa1NbFZbLw54+7qvdx5ItDp9j2umaukcJju/H7J8lXXnx2LhgcLKpjJKMI72/clyvgfJmIjWXjJkrjrNrzpEMk0hzNZvmsq1OGonZJbLtLllbxn/AEW2xRyW7VtXLbTmjNkm8Rp/fVGnhAAAOJO0Q+TwhtuW0f0fLqUPJhTj1RSNGsaREOwxV7NK18Ih6T6kAAAAAAAAAACk6YaJSxVeWJytXk9s6e67t3UOPOvrvr5cOs6wx9u2CbzOTHz74/CgSThJqaaaumndNNcjXIyqxOXBwAAAAAAAAA7MPXlhq8amHk4yi7xkt6YiZjjD7W01mLVnSYaLk+m9Gtl7eZvUqRW1JNqfGHF8z9xbrmiY4t/BvPHamuThMfXy/CmaQ59UzzFa1X7MF3FO+xcXzy4lfJebyyNq2q+e2s8u6P73ok8KwAAXAuWimiE61aNfNI6sE04033Umtqcl4seG98OWxjwzzs1ti3fa0xkycI8O+fNohaboAAAAAAAAAAAAEHpDoxSzqOs/sVeSolv4TXjL28SO+KLeantWxY8/Hlbx/PizTOMmrZNX1cbCyfczW2Muh8/B7Snak15ufz7PkwzpePj3I88oAAAAAAAAAAAAAPVluX1c0xPa8DByfLzRXPJ7kj7Ws2nSEmLDfLbs0jWWkaOaIU8qaqYq1SryPxYP7ifL957egt48MV4zzb+y7vph9q3G30jy/KykzQAAAAAAAAAAAAAAAOrE4eGKoOGJipRe+LSafqPkxE8JebUreOzaNYUTP9BHTvUyR3X7KT2rzJPf0PrZWvg76sXad1zHtYfl+J/PzUmrTlRquNaLjJbHFppp8U9xXngyZiYnSeb5uHwuAuAuAuAuAuAuAW12W1vcud8ALfkGg9TGWnmt6UPI8eXT5C6dvBE9MEzxlqbNuy9/aycI8O/+PXyaBgMDTy7DKngoKEVyLlfO3vb4stRWIjSG3jxUx17NI0h6T6kAAAAAAAAAAAAAAAAAABG5zkdDOadsbDat01slHolzcHdHi1ItzV8+zY80aXj497Ps80Lr5deWE/XU+eK+2lxhy9Kv0IrXw2ry4sTaN3ZcfGvtR9fl+PkrJCzwAAAAcXsBP5HoniM2tLV7XTfjzT2r7sd8vYuJJTFay7s+wZc3HlHjP4aFkejVDJVehHWny1JWcvVyRXR7S1THWvJubPseLB0xrPjPNMki0AAAAAAAAAAAAAAAAAAAAAAAIbOtGcPnF3Xhqz/aQtGXr5Jeu5HfHWyrn2PFm42jj4xzUPOdCsRl95YZduhzxX2kuMN79VytbDaOXFjZ93ZcfGvtR+3P5fhWnsk0962Ncz5mRM9w3beBP5Pojic0s3DtUPLmmtn3Yb37FxJK4rWXcGwZsvHTSPGfwveSaIYfKmpSj22ovHnZ2f3Y7l7XxLNMVatnBsGLFx5z4ysJKugAAAAAAAAAAAAAAAAAAAAAAAAAAAI7NMiw+au+Ooxk/K2xl+aNnbgebUrbnCDLs2LL1119fm6st0bwuWVNbCUIqXJJuU2uhybt6j5XHWvKHnFsmHFOta8fn6pY9rIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/Z";
    }
    else if(platform="OTHER"){
        logourl="images/other.jpg";
    }
    return logourl;
}
fetch(url)
.then(function(apidata){
    return apidata.json();
 })
 .then(function(data){
     let arr=data.result.ongoing;
     console.log(arr.length);
    for(let i=0;i<12;i++){
        let platform=arr[i].Platform;
        console.log(platform);
        let myurl=urlfetch(platform);
        image[i].setAttribute("src",myurl);
        //let datedata=arr[i].StartTime;
        //date[i].innerHTML=datedata;
        let name=arr[i].Name;
        platformhead[i].innerHTML=name;
        let durationdata=arr[i].EndTime;
        duration[i].textContent=durationdata;
        let contestlink=arr[i].url;
        console.log(contestlink);
        link[i].setAttribute("href",contestlink);
    }

 })
 .catch(function(error){
     console.log(error);
 });
