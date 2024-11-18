## Demonstration
Watch the video below to see a full demonstration of Logistic Regression in action:
[![Logistic Regression](https://img.youtube.com/vi/QgoWspXn4z8/0.jpg)](https://youtu.be/QgoWspXn4z8)

# Assignment 8: Logistic Regression

---

**Goals**:

In this assignment, we'll explore the effect of shifting clusters in a dataset on the parameters of a logistic regression model. You will implement parts of the code to:
1. Generate datasets with shifted clusters.
2. Fit a logistic regression model and extract parameters.
3. Visualize the data, decision boundary, and logistic regression results.
4. Analyze how these parameters change with increasing shift distances.

## Implementing Logistic Regression

1. **Generate Clusters with a Shift**  
- Implement the code to shift the second cluster along both the x-axis and y-axis by a specified `distance` parameter. This step will simulate different levels of separation between clusters, which you will explore later in the assignment.

2. **Record Parameters for Each Shift Distance**  
- Fit a logistic regression model to each generated dataset, and then extract and record the intercept (`beta0`) and coefficients (`beta1`, `beta2`) and any other necessary informtaion for each shift distance.

3. **Plot Each Dataset and Decision Boundary**  
- Implement code to plot the data points for each class in different colors. Include the decision boundary calculated from `beta0`, `beta1`, and `beta2` values to visually separate the classes.

4. **Calculate Logistic Loss for Each Model**  
- Implement code to compute the logistic loss for each shift distance. This loss reflects the accuracy of the logistic regression model at classifying the points in each dataset.

5. **Plot Results Across Shift Distances**  
- Implement code to create multiple plots that show how model parameters (`beta0`, `beta1`, `beta2`), slope, intercept, logistic loss, and margin width change as the shift distance increases.    

