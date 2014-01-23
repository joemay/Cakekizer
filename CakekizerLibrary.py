#!/usr/bin/python

import sys
from bs4 import BeautifulSoup


#soup = BeautifulSoup(open('index.html'))
soup = BeautifulSoup(str(sys.argv[1]))


anchor = soup.a
anchorText = anchor.get_text()
anchorId = ''
anchorClass = ''
anchorHref = ''
output = ''

output = "<?php $this->html->link(\n\t__('"+ anchorText + "'),"
output += "\tarray('controller' => '', 'action' => ''),"


arrayId = ''

for attribute in anchor.attrs:
	# href attribute
	if attribute == 'href':
		anchorHref = anchor.get('href')
	# id attribute
	elif attribute == 'id':
		anchorId = anchor.get('id')
		if(anchorId):
			arrayId =  "'id' => '" + anchorId + "',"
			output += "\tarray(" + arrayId
		else:
			output += "\tarray("
	# class attribute
	elif attribute == 'class':
		classList = anchor.get('class')
		for classItem in classList:
			anchorClass += classItem + ' '
		if (anchorClass != ' '):
			arrayClass = "\t\t'class' => '" + anchorClass + "\b',"
			output += arrayClass


otherAttributes = ''
for attribute in anchor.attrs:
	if attribute != 'href' and attribute != 'id' and attribute != 'class':
		otherAttributes += "'" + attribute + "' => '" + anchor.get(attribute) + "', "

output += otherAttributes + "\b\b\n); ?>"

print output



