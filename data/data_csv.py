import csv
with open('Data.csv', 'r') as file:
    reader = csv.reader(file)
    for r in reader:
        print(r)