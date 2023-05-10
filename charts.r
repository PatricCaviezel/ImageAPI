barchart <- function(x, title, xtitle, ytitle, color) {
    png("Image.png")
    barplot(x, main = title, xlab = xtitle, ylab = ytitle, col = color)
    dev.off()
}

linechart <- function(x, y, color, title, xtitle, ytitle) {
    png("Image.png")
    plot(x, y, col = color, type = "l", main = title, xlab = xtitle, ylab = ytitle)
    dev.off()
}

piechart <- function(x, title, color, xtitle="xtitle", ytitle="ytitle") {
    png("Image.png")
    pie(x, col = color, main = title)
    dev.off()
}
