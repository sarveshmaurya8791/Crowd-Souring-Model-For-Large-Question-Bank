import java.util.*;
class socks{
	public static void main(String args[])
	{
		Scanner sc=new Scanner(System.in);
		int a=sc.nextInt();
		int b=sc.nextInt();
		int c=sc.nextInt();
		int n=sc.nextInt();
		int count=0;
		while(n!=0)
		{
			if(a!=0)
			{
				a=a-1;
				count++;
				if(a%2==0)
				n--;
			}
			if(b!=0)
			{
				b=b-1;
				count++;
				if(b%2==0)
				n--;
			}
			if(c!=0)
			{
				c=c-1;
				count++;
				if(c%2==0)
				n--;
			}
		}
		System.out.println(count);
	}
}
			
				