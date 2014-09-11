walk(document.body);

function walk(node)
{
	// The author of cloud-to-butt stole this function from here:
	// http://is.gd/mwZp7E

	var child, next;

	switch ( node.nodeType )
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child )
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode)
{
	var v = textNode.nodeValue;
	
	v = v.replace(/\bGod\b/g, "Nicolas Cage");
	v = v.replace(/\bgod\b/g, "nicolas cage");
	v = v.replace(/\bGOD\b/g, "NICOLAS CAGE");

	textNode.nodeValue = v;
}
