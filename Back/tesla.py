import matplotlib.pyplot as plt

def make_graph(data, revenue, title):
    # Plotting the Tesla stock data
    plt.plot(data['Date'], data['Close'], label='Tesla Stock Price')

    # Plotting the Tesla revenue data
    plt.plot(revenue['Date'], revenue['Revenue'], label='Tesla Revenue')

    # Customizing the plot
    plt.xlabel('Date')
    plt.ylabel('Value')
    plt.title(title)
    plt.legend()

    # Display the graph
    plt.show()
