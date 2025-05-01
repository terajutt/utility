import { useState, useCallback } from 'react';
import { useToast } from '@/hooks/use-toast';

export function useClipboard() {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const copy = useCallback((text: string) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        setCopied(true);
        toast({
          title: "Copied!",
          description: "Copied to clipboard",
          duration: 2000,
        });
        setTimeout(() => setCopied(false), 2000);
      })
      .catch((err) => {
        console.error('Failed to copy: ', err);
        toast({
          title: "Error",
          description: "Failed to copy to clipboard",
          variant: "destructive",
          duration: 2000,
        });
      });
  }, [toast]);

  return { copied, copy };
}
