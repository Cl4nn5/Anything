echo ""
echo ""
echo "===================================================== git auto push run ============================================="
echo ""

message="$1"

if [ $1 = '' ];	then 
	message="Clann Auto Commit and Push"
fi

echo ""
echo "log: \$1 is "$1" and message is "$message"  "
echo ""

git add .
git commit -m "$message"
git push

echo ""
echo "#################### Success add & commit msg "$message" then push ####################"
echo ""
echo ""
