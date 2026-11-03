---
title: "How to update the tables above"
---

<details>
	<summary>How to update the tables above</summary>

	<b>Note:</b> This is currently PC-only.

	<ol>
		<li>
			In Overwatch, go to the Options menu ➡️ Gameplay ➡️ Custom Games - Workshop, and toggle on the option "Enable Workshop Inspector Log File"
			<ul>
				<li>You can turn it back off after you are done</li>
			</ul>
		</li>
		<li>
			In Overwatch, create a new lobby and import the code <code>C89J3</code>
			<ul>
				<li>As a backup, you can compile and import the code from <a target="_blank" href="https://workshop.codes/editor?uuid=6788b3f5-ffd0-44b2-9b63-553a7b724098">this project in the Workshop.codes Editor</a></li>
				<li>By default, this mode generates the truth table for all operations. To disable some operations and make the output easier to navigate, go to Lobby Settings ➡️ Workshop Settings, and toggle the operations you want to generate under Comparisons</li>
			</ul>
		</li>
		<li>
		  Start the game mode and make sure you spawn in
		  <ul>
		    <li>If the lobby crashes, try reducing "Comparisons per tick" and/or increasing "Ticks between comparison batches" under Lobby Settings ➡️ Workshop Settings ➡️ Other</li>
		  </ul>
		</li>
		<li>Wait for the progress bar to complete, and for any lag spikes to subside</li>
		<li>On Windows, navigate to <code>C:\Users\YOUR_USER\Documents\Overwatch\Workshop</code> (where YOUR_USER is your Window's user name), sort files by name in descending order, and open the last log file in a text editor</li>
		<li>
			Remove the beginning "[00:00:nn] " from each line
		</li>
		<li>
			For each truth table you want to update, search for the delimiters "Start of Results for OPERATION comparisons as an HTML table:", and "End of Results for OPERATION comparisons as an HTML table" (where OPERATION can be Equals, GreaterThan, LessThanOrEqual, etc.), and copy all the HTML text in-between
			<ol>
				<li>Optionally, pass the HTML text through a minifier. You can use an online tool like <a target="_blank" href="https://codebeautify.org/minify-html">this one</a></li>
			</ol>
		</li>
		<li>On this page, click on the Edit Article button on the right side</li>
		<li>For each truth table you want to update, replace the text in-between the "&lt;!-- Start of generated table --&gt;" and "&lt;!-- End of generated table --&gt;" delimiters of the relevant operator with the HTML text you copied before</li>
		<li>Change the "Last updated" text below with the current date and version of the game (found in the Battle.net launcher below the Play button)</li>
		<li>Submit your changes and you are done! Thanks for keeping things up to date 🙂</li>
	</ol>
</details>

## Uses

You might be able to abbreviate your actions by comparing between data types, especially regarding whether a variable is true or false. For example, if you want to check whether or not `A` is the zero vector, you could write `A == TRUE` or simply `A` instead of `A != (0, 0, 0)`.
