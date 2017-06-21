class Builder {
    withValue(value) {
        this.value = value;
        return this;
    }

    build() {
        return {
            random: (min, max) => {
                return this.value;
            }
        }
    }
}

module.exports = Builder;