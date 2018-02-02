

function Wizard(selector)
{
	
	// the container of the wizard that is where ages are or should be contained/
	this.wizard = document.querySelector(selector);
	
	// pages array
	this.pages = [];
	
	//pages count
	this.pageCount = 0;
	
	//current page index
	this.currentPage = 0;
	
	// the next page button selector
	this.nextButton = "";
	
	// the prev page button selector
	this.prevButton = "";
	
	// the cancel button selector
	this.cancelButton = "";
	
	// the submit if inside a form button selector
	this.submitButton = "";
	
	// add a page to the pages Array
	// pages work by index so page 0 is the default startig page 
	this.addPage = function(page)
	{
		this.pages[this.pageCount] = page;
		this.pageCount++;
	}
	
	// get the page more a utility function
	this.getPage = function(page)
	{
		for(i = 0; i < this.pageCount; i++)
		{
			if(this.pages[i] == page)
			{
				return this.pages[i];
			}
		}
		
		return false;
	}
	
	//Run the wizard handles the processing of events and output
	this.run = function()
	{
		//move pages scope
		var _pages = this.pages;
		
		//move pages count scope
		var _current = this.currentPage;
		
		//query the selctor for the next button
		var btn = document.querySelector(this.nextButton);
		
		//query the selctor for the submit button
		var submit = document.querySelector(this.submitButton);
		
		//hide the submit button
		submit.style = "display:none;";
		
		//loop through the pages hidng each one except the first one
		for(i = 1; i < this.pageCount; i++)
		{
			document.querySelector(this.pages[i]).style = "display:none";
		}
		
		// add an event listener to the next button
		btn.addEventListener("click", function(){
			
			//hide the current active page
			document.querySelector(_pages[_current]).style = "display:none;";

			//make sure there is another page
			if(_current + 1 < _pages.length){
				
				//show the next page
				document.querySelector(_pages[_current + 1]).style = "display:block;";
				
				//check if this page is the last page hide the next button
				//show suubmit button
				if((_current + 1) == (_pages.length - 1)){
					btn.style = "display:none;";
					submit.style = "display:block";
				}
				
				else{
					// so its not the last page set current page
					_current++;
				}
				
			}
			
		});
		
		// update page count;
		this.pageCount = _current;
	};
}
