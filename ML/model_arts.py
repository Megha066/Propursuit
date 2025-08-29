import matplotlib.pyplot as plt
# import seaborn as sns
import pandas as pd
import numpy as np
import pickle
df = pd.read_csv("Copy of Arts_data(1).csv")

x=df[['IQ','Bengali', 'English', 'History', 'Political Science', 'Education', 'Sociology', 'Geography']]
y=df['Domain']

from sklearn.model_selection import train_test_split
x_train, x_test, y_train, y_test = train_test_split(x, y, test_size=0.25)

from sklearn.ensemble import RandomForestClassifier
from sklearn.tree import DecisionTreeClassifier
model = RandomForestClassifier()
model.fit(x_train, y_train)

y_pred=model.predict(x_test)
pickle.dump(model,open("model_arts.pkl","wb"))

# from sklearn import  metrics