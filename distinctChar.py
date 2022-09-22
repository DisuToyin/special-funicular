def distinctChar(s, k):
    d={}
    start=0
    end=0
    sl = len(s)
    minIndex = 0
    maxLength = 0


    while end < sl:
        d[s[end]] = end
        if len(d) > k:
            minIndex = min(d.values())
            start = minIndex + 1
            del d[s[minIndex]]

        maxLength = max(maxLength, end - start + 1)
        end = end + 1
    return maxLength


print(distinctChar("araaci", 1))



