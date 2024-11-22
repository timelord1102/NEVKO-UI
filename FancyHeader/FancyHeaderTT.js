//responsible for coordinating when the length of the title bar changes, so it will displace the bottom bars positioning respectively
new MutationObserver((mutations) => {
	mutations.forEach(function(mutation) {
		mutation.addedNodes.forEach(function(addedNode) {
			//looking for steamdesktop_OuterFrame_3mz8w which is the parent of titlebarcontrols_TitleBarControls_
			if (addedNode.classList && addedNode.classList.contains('_3mz8wQ6Q44B8P7pzPP4Iyw')) {
				const title_bar_controls = document.querySelector('._3cykd-VfN_xBxf3Qxriccm')
				const bottom_bar_controls = document.querySelector('._1_yS5UP7el0aN4vntx3dx')	
				//fires `changeOffset` before adding mutationobs
				changeOffset(bottom_bar_controls, title_bar_controls.offsetWidth)
				//titlebar observer
				new MutationObserver((mutationsList) => {
					for (const _ of mutationsList) {
						//every time the titlebar changes, update the offset of the bottombars positioning (they are exactly relative)
						changeOffset(bottom_bar_controls, title_bar_controls.offsetWidth)
					}
				//listen for mutations on the titlebar, but we dont listen for anything in specific, just changes
				}).observe(title_bar_controls, { attributes: true, childList: true, subtree: true, characterData: true });
			}
		});
	});
//create an observer on the document body so you can read new DOM modifications. 
//used to tell when titlebar contents have loaded
}).observe(document.body, { childList: true, subtree: true });

function changeOffset(bottom, offsetWidth) {
	bottom.style.setProperty('right', `${offsetWidth + 121}px`, 'important')
};

// Activity Button - motionarium & dotfelixan сode
let main = document.getElementsByClassName("HoGkIKTQnkTEFGjqO-GMl")
let main_acc = document.getElementsByClassName('_2jXHP0742MyApMUVUM8IFn')[0].cloneNode(true)
let hr_acc = document.getElementsByClassName('_2jXHP0742MyApMUVUM8IFn')[4].cloneNode(true)
main_acc.innerHTML = 'Активности'

main_acc.addEventListener('click', function(event) {
    event.preventDefault();
    window.location = 'steam://url/SteamIDFriendsPage';
});

main[0].insertBefore(hr_acc, main[0].firstElementChild)
main[0].insertBefore(main_acc, main[0].firstElementChild)