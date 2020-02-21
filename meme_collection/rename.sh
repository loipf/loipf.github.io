### TODO adding new memes

# 1. update all names -
# executre WITHIN meme_collection folder :
# first to new name to avoid replacing and then to real name ..

ls -v | cat -n | grep ".jpg" | while read n f; do mv -n "$f" "$n.jpg"; done

ls -v | cat -n | grep ".jpg" | while read n f; do mv -n "$f" "meme_$n.jpg"; done 

# 2. update var meme_counter in meme_collection.html





