from .models import Movies, Rating, Link, History
from .serializers import LinkSerializers, HistorySerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
import random

# Create your views here.
def remove_duplicates(lists):
        noduplist=[]
        for list in lists:
            if list not in noduplist:
                noduplist.append(list)
            else:
                continue
        return noduplist

    

@api_view(['GET'])
def movieslistview(request,genre):

    movies =Movies.objects.filter(genres__icontains=genre)
    movies= movies.iterator()
    links=[]
    for movie in movies:
        movieId = movie.movieId
        link =Link.objects.get(movieId__exact=movieId)
        links.append(link)
    if len(links)>10:
        links=random.choices(links, k=10)
    links=remove_duplicates(links)
    serailize = LinkSerializers(links,many=True)
    return Response(serailize.data)

@api_view(['GET'])
def moviessearchview(request,search):

    movies =Movies.objects.filter(title__icontains=search)
    movies= movies.iterator()
    links=[]
    for movie in movies:
        movieId = movie.movieId
        link =Link.objects.get(movieId__exact=movieId)
        links.append(link)
    if len(links)>10:
        links=random.choices(links, k=10)
    links=remove_duplicates(links)
    serailize = LinkSerializers(links,many=True)
    return Response(serailize.data)


@api_view(['GET','POST'])
def historyview(request):
    history = History.objects.all()
    movies=history.iterator()
    links=[]
    for movie in movies:
        movieId = movie.movieid
        link =Link.objects.get(movieId__exact=movieId)
        links.append(link)
    links=remove_duplicates(links)
    serailize = LinkSerializers(links,many=True)
    if request.method == 'POST':
        data = request.data
        serailize = HistorySerializer(data=data)
        if serailize.is_valid():
            serailize.save()
            return Response(serailize.data)
        else:
            return Response(serailize.errors)
    return Response(serailize.data)

@api_view(['GET'])
def recommendview(request,userid):
    history = History.objects.filter(userid=userid)
    print(history)
    history= history.iterator()

    countAction = 0
    countAdventure= 0
    countAnimation= 0
    countChildren= 0
    countComedy= 0
    countCrime= 0
    countDocumentary= 0
    countDrama= 0
    countFantasy= 0
    countFilmNoir= 0
    countHorror= 0
    countMusical= 0
    countMystery= 0
    countRomance= 0
    countSciFi= 0
    countThriller= 0
    countWar= 0
    countWestern= 0
    for movie in history:
        genre = movie.genre
        genre = genre.split("|")

        if 'Action' in genre:
            countAction+=1

        if 'Adventure' in genre:
           countAdventure+=1

        if 'Animation' in genre:
            countAnimation+=1

        if 'Children\'s' in genre:
            countChildren +=1

        if 'Comedy' in genre:
            countComedy+=1

        if 'Crime' in genre:
            countCrime +=1

        if 'Documentary' in genre:
            countDocumentary+=1

        if 'Drama' in genre:
            countDrama+=1

        if 'Fantasy' in genre:
            countFantasy+=1

        if 'Film-Noir' in genre:
            countFilmNoir+=1

        if 'Horror' in genre:
            countHorror+=1

        if 'Musical' in genre:
            countMusical+=1

        if 'Mystery' in genre:
            countMystery+=1

        if ' Romance' in genre:
            countRomance+=1

        if 'Sci-Fi' in genre:
            countSciFi+=1

        if 'Thriller' in genre:
            countThriller+=1

        if 'War' in genre:
            countWar+=1

        if 'Western' in genre:
            countWestern+=1
        
    arr = [ countAction,
            countAdventure,
            countAnimation,
            countChildren,
            countComedy,
            countCrime,
            countDocumentary,
            countDrama,
            countFantasy,
            countFilmNoir,
            countHorror,
            countMusical,
            countMystery,
            countRomance,
            countSciFi,
            countThriller,
            countWar,
            countWestern] 

    arr.sort(reverse=True)
    maxarr = []
    i=0
    while i<len(arr):
        if i>0:
            if arr[i]!=0:
                maxarr.append(arr[i])
        else:
            maxarr.append(arr[i])
        i+=1
    maxarr=remove_duplicates(maxarr)
    # while i<len(maxarr):
    #     if i >0:
    #         if maxarr[i]==0:
    #             del maxarr[i]
    #     else:
    #         continue
    #     i+=1

    dic= {'Action':countAction,
            'Adventure':countAdventure,
            'Animation':countAnimation,
            'Children\'s':countChildren,
            'Comedy':countComedy,
            'Crime':countCrime,
            'Documentary':countDocumentary,
            'Drama':countDrama,
            'Fantasy':countFantasy,
            'Film-Noir':countFilmNoir,
            'Horror':countHorror,
            'Musical':countMusical,
            'Mystery':countMystery,
            'Romance':countRomance,
            'Sci-Fi':countSciFi,
            'Thriller':countThriller,
            'War':countWar,
            'Western':countWestern}
    genre = []
    for a in maxarr:
        if a>0:
            if dic['Action'] ==a:
                genre.append('Action')
                if len(genre)>4:
                    break
            if dic['Adventure'] ==a:
                genre.append('Adventure')
                if len(genre)>4:
                    break       

            if dic['Animation'] ==a:
                genre.append('Animation')
                if len(genre)>4:
                    break

            if dic['Children\'s'] ==a:
                genre.append('Children\'s')
                if len(genre)>4:
                    break
                
            if dic['Comedy'] ==a:
                genre.append('Comedy')
                if len(genre)>4:
                    break
                
            if dic['Crime'] ==a:
                genre.append('Crime')
                if len(genre)>4:
                    break
                
            if dic['Documentary'] ==a:
                genre.append('Documentary')
                if len(genre)>4:
                    break
                
            if dic['Drama'] ==a:
                genre.append('Drama')
                if len(genre)>4:
                    break
                
            if dic['Fantasy'] ==a:
                genre.append('Fantasy')
                if len(genre)>4:
                    break
                
            if dic['Film-Noir'] ==a:
                genre.append('Film-Noir')
                if len(genre)>4:
                    break
                
            if dic['Horror'] ==a:
                genre.append('Horror')
                if len(genre)>4:
                    break
                
            if dic['Musical'] ==a:
                if len(genre)>4:
                    break
                genre.append('Musical')

            if dic['Mystery'] ==a:
                genre.append('Mystery')
                if len(genre)>4:
                    break
                
            if dic['Romance'] ==a:
                genre.append('Romance')
                if len(genre)>4:
                    break
                
            if dic['Sci-Fi'] ==a:
                genre.append('Sci-Fi')
                if len(genre)>4:
                    break
                
            if dic['Thriller'] ==a:
                genre.append('Thriller')
                if len(genre)>4:
                    break
                
            if dic['War'] ==a:
                genre.append('War')
                if len(genre)>4:
                    break
                
            if dic['Western'] ==a:
                genre.append('Western')
                if len(genre)>4:
                    break
        else:
            genre=['Thriller','War']
    links=[]
    for genre in genre:
        movies =Movies.objects.filter(genres__icontains=genre)
        movies= movies.iterator()
        for movie in movies:
            movieId = movie.movieId
            link =Link.objects.get(movieId__exact=movieId)
            links.append(link)
    

    # ratings=[]
    # rating=[]
    # for genre in genre:
    #     movies =Movies.objects.filter(genres__icontains=genre)
    #     movies= movies.iterator()
    #     for movie in movies:
    #         movieId = movie.movieId
    #         obj_rating =Rating.objects.filter(movieId__exact=movieId)
    #         rating.append(obj_rating)
    #         ratings.append(rating)

    # approved_ratings =[]     
    # for rating in ratings:
    #     sum=0
    #     for i in rating:
    #         sum =sum + i.rating
    #         b=i
    #     avg=sum/len(rating)
    #     if avg>=3:
    #         approved_ratings.append(b)
        
    
    # links=[]
    # for approved_rating in approved_ratings:
    #     movieId = approved_rating.movieId
    #     link =Rating.objects.get(movieId__exact=movieId)
    #     links.append(link)
        
    # if len(links)>40:
    #     links=random.choices(links, k=30)
    # links = remove_duplicates(links) 


    if len(links)>10:
        links=random.choices(links, k=10)
    links = remove_duplicates(links) 

    print(len(links))
    serailize = LinkSerializers(links,many=True)
    return Response(serailize.data)
    