import pickle
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder
from sklearn.metrics import classification_report, accuracy_score
from sklearn import metrics
from sklearn.ensemble import RandomForestClassifier
from sklearn.tree import DecisionTreeClassifier

data=pd.read_csv("Commerce_Dataset.csv")
data = data.dropna()
ip_col=["IQ","BENGALI","ENGLISH","MATH","ACCOUNTANCY","ECONOMICS","BUISNESS STUDIES","COMPUTER APPLICATION"]
# print(data.columns.tolist())
# print(data.isnull().sum())

X=data[ip_col]
y=data["CAREER OPTION"]




X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.25)

rf_model=DecisionTreeClassifier()
rf_model.fit(X_train, y_train)

pickle.dump(rf_model,open("model_Commerce.pkl","wb"))