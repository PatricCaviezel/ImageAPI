bar <- function(data) {
    png("Image.png")
    cat(data)
    barplot(data.x, main = data.title, xlab = data.xtitle, ylab = data.ytitle, col = data.color)
    dev.off()
}

line <- function(x, y, color, title, xtitle, ytitle) {
    plot(x, y, col = color, type = "l", main = title, xlab = xtitle, ylab = ytitle)
}

piechart <- function(slices, title, color) {
    pie(slices, col = color, main = title)
}
