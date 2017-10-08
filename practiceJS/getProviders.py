#!/usr/bin/env python

import urllib.request

import json

def main():

	link = "http://localhost:3000/api/Provider"

	req = urllib.request.urlopen(link).read().decode("utf-8")

	print(req)

if __name__ == '__main__':
	main()
