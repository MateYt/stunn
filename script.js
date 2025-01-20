function togglePopup(type) {
  const popupContainer = document.getElementById('popupContainer');
  const popupContent = document.getElementById('popupContent');

  if (popupContainer.classList.contains('hidden')) {
    popupContainer.classList.remove('hidden');

    if (type === 'image') {
      popupContent.innerHTML = `<img src="icons/bgbox.jpg">`;
    } else if (type === 'text1') {
      popupContent.innerHTML = `<p style="color: blue;">HI BABIIII, HAPPY BIRTHDAYYYY!!!!
super grateful ako kay Lord na kasama kita ngayon pagpasok sa 2025, Thank you rin dahil caring ka para sakin palagi simula dati pa. Keep going babi I know you're doing your best at everything and proud na proud me sa pretty and cutiee kong babiii.
 HAPPY BIRTHDAY ULIT MWUUAHHH ILOVEEYOUUSOMUCHH!!!</p>`;
    } else if (type === 'text2') {
      popupContent.innerHTML = `<p style="color: green;">I tend to notice si babi lagi nga umiiwas pag eye to eye,, baka uncomfy ka kasi na nonotice ko facial features mo pero oks lang sakin yon and umm you often compare yourself to others pero you are not under them nor worse looking than them,, babi you're very beautiful kahit without makeup (very kissable) <br>

Very sensitive pag nagiging emotional, prone to crying,, its normal naman, my babi is just a normal girl at the end of the day,, you can cry on my shoulders if you want babiii.

<br>Di pa masyadong nag oopen ng deep problems or stuff pero it's developing naman, you can tell me anything anytime, I won't judge, I won't go away, I'll stay and listen babi, If you have heavy worries pwede natin paghatian I'll be there.<br>
Easy to panic, ayaw nag bobother ng ibang people, very genuine and maalalahanin sa friends and families
<br>
I notice babi always want ng attention, acts childish when comfortable,, minsan nag aact tough and dominant ,,  mhmmm very very cutiee.. AGAIN HAPPY BIRTHDAYY LOVEEEYOUUUU!!!</p>`;
    } else if (type === 'text3') {
      popupContent.innerHTML = `<p style="color: red;">You are my favorite girl, always will be.. I love You So Much</p>`;
    }
  } else {
    popupContainer.classList.add('hidden');
    popupContent.innerHTML = ''; // Clear content when closing
  }
}
