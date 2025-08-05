import pickle
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder
from sklearn.ensemble import RandomForestClassifier
data=pd.read_csv("Dataset_class_10.csv")


ip_col=["IQ","BENGALI","ENGLISH","MATHEMATICS","BIOLOGY","PHYSICAL SCIENCE","HISTORY","GEOGRAPHY"]
X=data[ip_col]
y=data["STREAM"]

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)


rf_model= RandomForestClassifier()
rf_model.fit(X_train, y_train)
pickle.dump(rf_model,open("model_10.pkl","wb"))



# model.py 